# Error Handling

CodeCraft should make failures understandable instead of silently breaking the learning flow.

## Guidelines

- Validate user input before sending requests.
- Show a short, actionable message when an operation fails.
- Preserve entered data when a request fails.
- Avoid exposing server internals or stack traces.
- Log useful debugging information during development.
- Provide a retry path for recoverable failures.

## Learning experience

An error message should tell the learner what happened and what they can do next. Network failures, invalid answers, authentication errors, and missing content should have distinct user-facing states.
