#!/bin/bash
# add_visitors.sh
# Usage: sudo ./add_visitors.sh <userfile> <pubkey_base_url>
# Example: sudo ./add_visitors.sh newusers.txt https://www.cs.fsu.edu/~langley/NEWKEYS/
#
# For each user in <userfile> (format: username:uid:gecos:shell):
#   - Creates a matching group (gid == uid)
#   - Creates the user with home at /home/visitors/<username>
#   - Populates home from /etc/skel
#   - Downloads <pubkey_base_url>/<username>.pub into ~/.ssh/authorized_keys
#   - Sets all required permissions (700 .ssh, 600 authorized_keys)
#   - Creates /scratch/<username>/ owned by the user

# ── Argument validation ────────────────────────────────────────────────────────
if [[ $# -ne 2 ]]; then
    echo "Usage: $0 <userfile> <pubkey_base_url>" >&2
    exit 1
fi

USERFILE="$1"
PUBKEY_URL="${2%/}"   # strip any trailing slash

if [[ ! -f "$USERFILE" ]]; then
    echo "ERROR: User file '$USERFILE' not found." >&2
    exit 1
fi

VISITORS_BASE="/home/visitors"
SCRATCH_BASE="/scratch"

mkdir -p "$VISITORS_BASE"
mkdir -p "$SCRATCH_BASE"

# ── Main loop ──────────────────────────────────────────────────────────────────
while IFS=: read -r name uid gecos shell; do
    # Skip blank lines and comments
    [[ -z "$name" || "$name" == \#* ]] && continue

    HOMEDIR="${VISITORS_BASE}/${name}"

    # ── 1. Check for existing username or uid clashes ────────────────────────
    if id "$name" &>/dev/null; then
        echo "SKIP: user '$name' already exists — skipping." >&2
        continue
    fi
    if getent passwd | awk -F: '{print $3}' | grep -qx "$uid"; then
        echo "SKIP: uid '$uid' already in use — skipping '$name'." >&2
        continue
    fi

    # ── 2. Create group (gid == uid) ─────────────────────────────────────────
    if ! getent group "$uid" &>/dev/null; then
        groupadd -g "$uid" "$name"
    fi

    # ── 3. Create user (no password — '!' locks it) ──────────────────────────
    useradd \
        -u "$uid" \
        -g "$uid" \
        -c "$gecos" \
        -d "$HOMEDIR" \
        -s "$shell" \
        -p '!' \
        "$name"

    if [[ $? -ne 0 ]]; then
        echo "ERROR: useradd failed for '$name'" >&2
        continue
    fi

    # ── 4. Populate home from /etc/skel ──────────────────────────────────────
    mkdir -p "$HOMEDIR"
    cp -a /etc/skel/. "$HOMEDIR/"
    chown -R "${uid}:${uid}" "$HOMEDIR"
    chmod 750 "$HOMEDIR"

    # ── 5. Set up .ssh and authorized_keys ───────────────────────────────────
    SSH_DIR="${HOMEDIR}/.ssh"
    AUTH_KEYS="${SSH_DIR}/authorized_keys"

    mkdir -p "$SSH_DIR"
    chmod 700 "$SSH_DIR"

    PUBKEY_FILE_URL="${PUBKEY_URL}/${name}.pub"

    # Attempt to download the pubkey; skip authorized_keys if none available
    TMPKEY=$(mktemp)
    if wget -q -O "$TMPKEY" "$PUBKEY_FILE_URL" && [[ -s "$TMPKEY" ]]; then
        cat "$TMPKEY" >> "$AUTH_KEYS"
        chmod 600 "$AUTH_KEYS"
        echo "  [pubkey] Downloaded ${name}.pub"
    else
        echo "  [pubkey] No pubkey found for '$name' at ${PUBKEY_FILE_URL} — skipping authorized_keys."
    fi
    rm -f "$TMPKEY"

    chown -R "${uid}:${uid}" "$SSH_DIR"

    # ── 6. Create /scratch/<username>/ ───────────────────────────────────────
    SCRATCH_DIR="${SCRATCH_BASE}/${name}"
    mkdir -p "$SCRATCH_DIR"
    chown "${uid}:${uid}" "$SCRATCH_DIR"
    chmod 700 "$SCRATCH_DIR"

    echo "OK: $name (uid/gid=$uid, home=$HOMEDIR, shell=$shell)"

done < "$USERFILE"

echo ""
echo "Done. Don't forget:"
echo "  1. Ensure sshd is running and PasswordAuthentication is disabled in /etc/ssh/sshd_config"
echo "  2. On Arch: run 'ssh-keygen -A' as root if host keys are missing, then restart sshd."