export const RegisterValidators = {
  // Regex pattern for validating email addresses
  emailRegex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",

  // Regex pattern for validating passwords
  // - At least one lowercase letter
  // - At least one uppercase letter
  // - At least one digit
  // - At least one special character
  // - Minimum length of 8 characters
  passwordRegex: `
    ^(?=.*[a-z])      # At least one lowercase letter
    (?=.*[A-Z])       # At least one uppercase letter
    (?=.*\\d)         # At least one digit
    (?=.*[~!@#$%^&*()_+=[\\]{}|;:'",.<>?/-]) # At least one special character
    .{8,}$            # Minimum length of 8 characters
  `.replace(/\s+/g, ""), // Remove whitespace for proper regex formatting
};
