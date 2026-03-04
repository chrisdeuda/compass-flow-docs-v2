#!/bin/bash
# fetch-prs.sh - Fetch merged PRs for AI to convert to client-friendly changelog

REPO="chrisdeuda/clarity-compass-flow"
OUTPUT="/Users/chrisdeuda/workspace/clients/chris-apps/sevron-strategy/sevron-flow-docs/blog/new-entries.md"

echo "Fetching merged PRs from $REPO..."

# Get merged PRs
gh pr list --repo "$REPO" --state merged --limit 10 --json number,title > /tmp/prs.json

# Create output
cat > "$OUTPUT" << EOF
---
title: Recent Updates
date: $(date +%Y-%m-%d)
---

# Recent Updates

EOF

# Add PRs
cat /tmp/prs.json | jq -r '.[] | "  - \(.title) (#\(.number))"' >> "$OUTPUT"

echo "✅ Created $OUTPUT"
echo ""
echo "=== Preview ==="
cat "$OUTPUT"
