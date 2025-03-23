import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { BaseCustomEntity } from './base.entity';

@Entity('user')
export class UserEntity extends BaseCustomEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;
}
