import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { UserRepository } from '../ports/user.repository';
import { User } from '../../domain/user';
import { CreateUserCommand } from './create-user.command';
import { UserCreatedEvent } from '../../domain/events/user-created.event';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  private readonly logger = new Logger(CreateUserCommandHandler.name);

  constructor(
    private readonly userRepository: UserRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand) {
    this.logger.debug(
      `processing "CreateUserCommand": ${JSON.stringify(command)}`,
    );

    const user = User.create(
      command.name,
      command.email,
      command.phoneNumber,
      command.password,
    );

    const newUser = await this.userRepository.create(user);
    this.eventBus.publish(new UserCreatedEvent(newUser));

    return newUser;
  }
}
