---
description: Review Code
agent: Plan
model: anthropic/claude-sonnet-4-5
---

# Code Review

## Overview

Perform a thorough code review that verifies functionality, maintainability, and
security before approving a change. Focus on architecture, readability,
performance implications, and provide actionable suggestions for improvement.

## Steps

1. **Understand the change**
    - Read the PR description and related issues for context
    - Identify the scope of files and features impacted
    - Note any assumptions or questions to clarify with the author
2. **Validate functionality**
    - Confirm the code delivers the intended behavior
    - Exercise edge cases or guard conditions mentally or by running locally
    - Check error handling paths and logging for clarity
    - Check logic bugs, incorrect async/await or Promise handling, unhandled Promise rejections, callback leaks, off-by-one and edge cases, race conditions (concurrent DB updates, cache races), incorrect API usage, data validation flaws.
3. **Assess quality**
    - Ensure functions are focused, names are descriptive, and code is readable
    - Watch for duplication, dead code, or missing tests
    - Verify documentation and comments reflect the latest changes
4. **Review security and risk**
    - Look for injection points, insecure defaults, or missing validation
    - Confirm secrets or credentials are not exposed
    - Evaluate performance or scalability impacts of the change


### Node/React specific checks to apply:
- Backend (Node): async/await misuse, unawaited Promises, input validation at boundary, parameterized queries/ORM safety, transactions for multi-step writes, avoid blocking sync calls, safe file path handling, proper `Content-Type` and CORS config, verify cookie attributes (`HttpOnly`, `Secure`, `SameSite`).
- Frontend (React): verify `useEffect` dependencies and cleanup, avoid memory leaks (unmounted state updates), excessive re-renders, use of `dangerouslySetInnerHTML`, SSR hydration mismatches, key props in lists, lazy loading/code-splitting where needed, large bundle or heavy libraries risk.
- Data & Concurrency: check for lost updates (no optimistic locking or transactions), cache invalidation races, idempotency of retryable endpoints.
- Dependencies: flag outdated or high-severity npm advisories or risky transitive deps.

## Review Checklist

### Functionality

- [ ] Intended behavior works and matches requirements
- [ ] Edge cases handled gracefully
- [ ] Error handling is appropriate and informative

### Code Quality

- [ ] Code structure is clear and maintainable
- [ ] No unnecessary duplication or dead code
- [ ] Tests/documentation updated as needed

### Security & Safety

- [ ] No obvious security vulnerabilities introduced
- [ ] Inputs validated and outputs sanitized
- [ ] Sensitive data handled correctly

## Additional Review Notes

- Architecture and design decisions considered
- Performance bottlenecks or regressions assessed
- Coding standards and best practices followed
- Resource management, error handling, and logging reviewed
- Suggested alternatives, additional test cases, or documentation updates
  captured

Provide constructive feedback with concrete examples and actionable guidance for
the author.
