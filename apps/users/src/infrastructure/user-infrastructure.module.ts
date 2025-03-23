import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './persistence/orm/entities/user.entity';
import { UserRepository } from '../application/ports/user.repository';
import { OrmUserRepository } from './persistence/orm/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: UserRepository,
      useClass: OrmUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class UserInfrastructureModule {}
