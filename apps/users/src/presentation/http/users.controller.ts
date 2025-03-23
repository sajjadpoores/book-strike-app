import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UserService } from '../../application/users.service';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { GetUserQuery } from '../../application/queries/get-user.query';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(
      new CreateUserCommand(
        createUserDto.name,
        createUserDto.email,
        createUserDto.phoneNumber,
        createUserDto.password,
      ),
    );
  }

  @Get(':id')
  findById(@Param() getUserDto: GetUserDto) {
    return this.userService.findById(new GetUserQuery(getUserDto.id));
  }
}
