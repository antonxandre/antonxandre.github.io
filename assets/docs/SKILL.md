---
name: git-checkpoint
description: Guidelines and instructions for creating Git commit checkpoints during coding tasks.
---

# Git Checkpoint Skill

This skill provides guidelines and instructions for creating incremental Git commit checkpoints. Creating Git checkpoints during coding sessions helps maintain a clean history, makes debugging easier, and allows safer refactoring.

## Triggering Checkpoints

You should consider creating a commit checkpoint when:
1. **Feature/Task Completion**: A logic unit of a task or subtask is complete and has been verified/tested.
2. **Refactoring Milestones**: Before initiating a high-risk refactoring or after completing a successful refactoring step.
3. **Bug Fixes**: A bug is identified and resolved.
4. **Intermediate Progress**: Significant progress has been made on a larger feature, and committing it prevents loss of progress.

## Workflow

### 1. Check Status and Diff
Before staging any changes, review the modifications to ensure only intentional changes are committed.
- Run `git status` to see modified, created, or deleted files.
- Run `git diff` to review the exact changes.

### 2. Stage Changes
Stage only the relevant files. Avoid using `git add .` if there are untracked files or temp/unrelated modifications that shouldn't be committed.
- Run `git add <file1> <file2>` to stage files.
- If there are new files to ignore, update `.gitignore` before staging.

### 3. Write a Commit Message
Write a clear, concise commit message following Conventional Commits format when possible.
- **Format**: `<type>(<scope>): <description>` (scope is optional).
- **Types**:
  - `feat`: A new feature.
  - `fix`: A bug fix.
  - `docs`: Documentation changes.
  - `style`: Formatting, semi-colons, white-space, etc. (no production code changes).
  - `refactor`: Code changes that neither fix a bug nor add a feature.
  - `test`: Adding missing tests or correcting existing tests.
  - `chore`: Build tasks, package manager configs, agent configuration (e.g., updating rules/skills).
- **Subject Line**:
  - Use the imperative mood (e.g., "add agent rule" instead of "added agent rule").
  - Do not capitalize the first letter.
  - Do not end with a period.
- **Example**: `chore(agent): add git-checkpoint skill and rules`

### 4. Commit
Execute the commit:
- `git commit -m "<message>"`

## Important Considerations
- **Do not commit credentials or secrets**: Always double check file diffs.
- **Do not commit build artifacts**: Check that files like `build/`, `.dart_tool/`, etc. are ignored by `.gitignore`.
- **Review before Committing**: Make sure your modifications compile or do not break basic functions before committing them.
