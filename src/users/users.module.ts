import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './models/user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
