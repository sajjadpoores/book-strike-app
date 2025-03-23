import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from './get-user.query';
import { UserRepository } from '../ports/user.repository';
import { User } from '../../domain/user';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUserQuery): Promise<User> {
    return this.userRepository.findById(query.id);
  }
}
