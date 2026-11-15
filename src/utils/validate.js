export const checkValidData = (email, password, fullName) => {
  const isFullNameValid = /^[a-zA-Z\s]+$/.test(fullName);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );
  if (!isEmailValid) return "Invalid email format";
  if (!isPasswordValid) return "Invalid password format";
  return null;
};
