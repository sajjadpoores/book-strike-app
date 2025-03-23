import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from '../presentation/http/users.controller';
import { CreateUserCommandHandler } from './commands/create-user.command-handler';
import { GetUserQueryHandler } from './queries/get-user.query-handler';
import { UserCreatedEventHandler } from './event-handlers/user-created.event-handler';
import { CqrsModule } from '@nestjs/cqrs';
import { UserInfrastructureModule } from '../infrastructure/user-infrastructure.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigService } from '../infrastructure/persistence/orm/config/typeorm-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(
        process.cwd(),
        'apps',
        'users',
        'env',
        `${process.env.NODE_ENV || 'development'}.env`,
      ),
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    CqrsModule.forRoot(),
    UserInfrastructureModule,
  ],
  controllers: [UserController],
  providers: [
    UserService,
    CreateUserCommandHandler,
    GetUserQueryHandler,
    UserCreatedEventHandler,
  ],
})
export class UsersModule {}
