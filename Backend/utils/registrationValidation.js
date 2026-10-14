function validateRegistrationInput({ email, password, confirmpassword } = {}) {
  if (![email, password, confirmpassword].every(value => typeof value === 'string' && value.trim())) {
    return 'Email and both password fields are required.';
  }
  const normalizedEmail = email.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return 'Enter a valid email address.';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  if (password !== confirmpassword) {
    return 'Passwords do not match.';
  }
  return null;
}

module.exports = { validateRegistrationInput };
