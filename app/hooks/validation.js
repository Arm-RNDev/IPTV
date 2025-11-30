export const validateUsername = username => {
  if (!username.trim()) {
    return 'Username cannot be empty';
  }
  if (/\s/.test(username)) {
    return 'Username cannot contain spaces';
  }
  return;
};

export const validatePassword = password => {
  if (!password.trim()) {
    return 'Password cannot be empty';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  if (password.length > 20) {
    return 'Password cannot exceed 20 characters';
  }
  if (/\s/.test(password)) {
    return 'Password cannot contain spaces';
  }
  return;
};
