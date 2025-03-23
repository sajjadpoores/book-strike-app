import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { UserMapper } from '../mappers/user.mapper';
import { UserRepository } from 'apps/users/src/application/ports/user.repository';
import { User } from 'apps/users/src/domain/user';

export class OrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findById(id: string): Promise<User> {
    const entity = await this.userRepository.findOne({ where: { id } });
    if (!entity) {
      throw new Error('User not found');
    }

    const user = UserMapper.toDomain(entity);
    return user;
  }

  async create(user: User): Promise<User> {
    const entity = UserMapper.toPersistence(user);
    const savedEntity = await this.userRepository.save(entity);
    return UserMapper.toDomain(savedEntity);
  }
}
