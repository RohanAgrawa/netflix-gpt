export const validateUser = (email, password) => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  ).test(password);

  if (!isValidEmail && !isValidPassword) {
    return "Please provide valid Email & Password.";
  } else if (!isValidEmail) {
    return "Please provide valid Email.";
  } else if (!isValidPassword) {
    return "Please provide valid Password.";
  }
  return null;
};
