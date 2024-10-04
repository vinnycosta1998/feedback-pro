export class PasswordLengthError extends Error {
  constructor() {
    super("Password contains between 8 and 14 caractheres ");
  }
}
