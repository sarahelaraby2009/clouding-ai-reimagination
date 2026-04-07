Log a structured entry to the project's Notion database.

Use the Notion MCP tool `notion-create-pages` to create a new page in the database identified by the `NOTION_DATABASE_ID` environment variable.

Ask the user for:
1. **Title** — the page title / entry name
2. **Body** — the main content or notes (can be multi-line)
3. **Tags** (optional) — comma-separated list of tags/labels

Then create the page with:
- Title property set to the provided title
- A paragraph block containing the body text
- Multi-select or rich text Tags property if tags were provided
- A "Created via" note: "Logged from Claude Code – clouding.ai"

Confirm success by reporting the created page URL back to the user.
