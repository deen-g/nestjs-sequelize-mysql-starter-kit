import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  roles: string;

  @Column({ defaultValue: true })
  isEnabled: boolean;
}
