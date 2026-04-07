Stage, commit, and push all current changes to the remote repository.

Steps:
1. Run `git status` to show the user what will be committed
2. Run `git diff --stat` to summarize changed files
3. Analyze the changes and draft a conventional commit message in the format:
   `<type>(<scope>): <short description>`
   Types: feat, fix, chore, refactor, style, docs, test
4. Show the user the proposed commit message and ask for confirmation before proceeding
5. If confirmed: stage all relevant files, commit with the message, and push to the current branch on origin
6. Report the push result (branch name, commit hash, remote URL)

Do NOT use `--no-verify` or skip any git hooks.
Do NOT push to main/master without explicit user confirmation.
