import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetUserDto {
  @IsString()
  @ApiProperty({
    type: String,
    description: 'user Id',
    example: '87d329f6-59ef-4bf6-9058-490cea557611',
  })
  id: string;
}
