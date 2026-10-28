# Form Validation Behavior

- Validate required fields before submission.
- Explain invalid input next to the relevant field.
- Preserve valid user input after a failed request.
- Do not rely only on client-side validation for security.
- Prevent duplicate submissions while a request is pending.
- Ensure errors are accessible to keyboard and screen-reader users.

## Registration validation review

Before changing registration validation, check that:
- Required fields are validated after trimming surrounding whitespace.
- Email normalization is consistent between validation and persistence.
- Non-string values are rejected safely rather than causing a runtime error.
- Invalid submissions show a clear message and do not trigger a success state.
- Server-side checks remain authoritative even when the browser validates the form.

Add a regression test for every bug found in this flow.
