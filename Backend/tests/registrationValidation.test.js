const test = require('node:test');
const assert = require('node:assert/strict');
const { validateRegistrationInput } = require('../utils/registrationValidation');

test('accepts a valid registration payload', () => {
  assert.equal(validateRegistrationInput({
    email: 'student@example.com', password: 'securepass1', confirmpassword: 'securepass1'
  }), null);
});

test('rejects missing fields and malformed email', () => {
  assert.match(validateRegistrationInput({ email: '', password: 'securepass1', confirmpassword: 'securepass1' }), /required/i);
  assert.match(validateRegistrationInput({ email: 'not-an-email', password: 'securepass1', confirmpassword: 'securepass1' }), /valid email/i);
});

test('rejects short and mismatched passwords', () => {
  assert.match(validateRegistrationInput({ email: 'student@example.com', password: 'short', confirmpassword: 'short' }), /8 characters/i);
  assert.match(validateRegistrationInput({ email: 'student@example.com', password: 'securepass1', confirmpassword: 'differentpass' }), /do not match/i);
});

test('rejects whitespace-only required fields', () => {
  assert.match(validateRegistrationInput({
    email: '   ', password: 'securepass1', confirmpassword: 'securepass1'
  }), /required/i);
  assert.match(validateRegistrationInput({
    email: 'student@example.com', password: '   ', confirmpassword: '   '
  }), /required/i);
});

test('accepts a valid email with surrounding whitespace', () => {
  assert.equal(validateRegistrationInput({
    email: '  student@example.com  ',
    password: 'securepass1',
    confirmpassword: 'securepass1'
  }), null);
});
