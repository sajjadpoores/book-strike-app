export class DuplicateUserException extends Error {
  constructor(message: string = 'A user with this identifier already exists') {
    super(message);
    this.name = 'DuplicateUserException';
  }
}
