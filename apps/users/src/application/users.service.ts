import { Injectable } from '@nestjs/common';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUserQuery } from './queries/get-user.query';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Injectable()
export class UserService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  create(createUserCommand: CreateUserCommand) {
    return this.commandBus.execute(createUserCommand);
  }

  findById(getUserQuery: GetUserQuery) {
    return this.queryBus.execute(getUserQuery);
  }
}
