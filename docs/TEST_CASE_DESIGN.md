# Test Case Design

Test cases should cover both the happy path and common failure paths.

## Core areas

| Area | Example |
| --- | --- |
| Authentication | Valid and invalid sign-in |
| Catalog | Topic loads correctly |
| Lesson | Content and examples render |
| Practice | Correct and incorrect answers |
| Quiz | Score is calculated consistently |
| Progress | Completion is persisted |

## Test design rule

For every new feature, add at least one normal case, one boundary case, and one invalid-input case where applicable.
