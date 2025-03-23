import { User } from 'apps/users/src/domain/user';
import { UserEntity } from '../entities/user.entity';

export class UserMapper {
  static toDomain(userEntity: UserEntity): User {
    return new User(
      userEntity.id,
      userEntity.name,
      userEntity.email,
      userEntity.phoneNumber,
      userEntity.password,
    );
  }

  static toPersistence(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id;
    entity.name = user.name;
    entity.email = user.email;
    entity.phoneNumber = user.phoneNumber;
    entity.password = user.password;
    return entity;
  }
}
