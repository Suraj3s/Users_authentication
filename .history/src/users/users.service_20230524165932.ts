import { Injectable } from '@nestjs/common';
import { User } from './schema/Users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User_interface } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private Usermodel: Model<User>) {}

  create(createUserDto: User_interface) {
    const User = {
      User_name: createUserDto.User_name,
      User_logo: createUserDto.User_logo,
      User_age: createUserDto.User_age,
      User_email: createUserDto.User_email,
      User_passcode: createUserDto.User_passcode,
      permission: createUserDto.permission,
      date: new Date(),
    };
    const new_user = new this.Usermodel(User);
    return new_user.save() + 'success';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
