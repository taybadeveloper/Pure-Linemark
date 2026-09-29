#!/bin/bash
# Auto-commit + push after every Claude Code turn (Stop hook)
# Skips silently when there is nothing to commit or push fails (no credentials etc.)

cd "C:/Users/Tayyaba Saleem/Desktop/Pure-Linemark" || exit 0

git add -A

# Nothing staged? Nothing to do.
if git diff --cached --quiet; then
  exit 0
fi

git commit -q -m "Auto-commit: site updates ($(date '+%Y-%m-%d %H:%M'))" \
  -m "Co-Authored-By: Claude Code <noreply@anthropic.com>"

# Push without ever prompting (fails fast if no stored credentials)
GIT_TERMINAL_PROMPT=0 git push origin main 2>/dev/null || exit 0
exit 0
