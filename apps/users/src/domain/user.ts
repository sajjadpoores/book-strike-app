import { randomUUID } from 'crypto';

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phoneNumber: string,
    public password: string,
  ) {}

  static create(
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
  ): User {
    const userId = randomUUID();
    return new User(userId, name, email, phoneNumber, password);
  }
}
