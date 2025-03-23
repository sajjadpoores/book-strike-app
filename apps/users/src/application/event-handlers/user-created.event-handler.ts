import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../../domain/events/user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler
  implements IEventHandler<UserCreatedEvent>
{
  private readonly logger = new Logger(UserCreatedEventHandler.name);

  handle(event: UserCreatedEvent) {
    this.logger.log(`User created event: ${JSON.stringify(event)}`);
  }
}
