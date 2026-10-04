# Testing Notes

CodeCraft changes should be checked at the level of the feature being changed.

## Frontend smoke test

- Load the home page.
- Open the learning/catalog flow.
- Check sign-in and sign-up forms.
- Verify navigation links.
- Confirm the browser console has no new errors.

## Backend smoke test

From `Backend/`, install dependencies and start the server. Exercise the affected endpoint or flow before opening a pull request.

## Pull request expectation

Describe what changed, how it was tested, and any known limitations. Keep unrelated changes out of the same PR.
