export class TitleLengthError extends Error {
  constructor() {
    super("Title has length between 12 and 120 caractheres");
  }
}
