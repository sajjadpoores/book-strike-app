import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 30)
  @ApiProperty({
    type: String,
    description: 'user name',
    example: 'Sajjad',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    type: String,
    description: 'user email',
    example: 'sajjadpoores@gmail.com',
  })
  email: string;

  @IsString()
  @Length(8, 20)
  @ApiProperty({
    type: String,
    description: 'user password',
    example: 'test@123',
  })
  password: string;

  @IsString()
  @IsPhoneNumber('IR')
  @ApiProperty({
    type: String,
    description: 'user phone number',
    example: '09227820535',
  })
  phoneNumber: string;
}
