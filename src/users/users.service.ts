import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(User: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(User);
    return await newUser.save();
  }
  async delete(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async update(User: CreateUserDto, id: string): Promise<User> {
    const user = await this.findOne(id);
    return await user.update(User);
  }
}
