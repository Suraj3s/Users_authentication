import { Injectable } from '@nestjs/common';
import { User } from './schema/Users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { verify_identity } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private Usermodel: Model<User>) {}

  async create(createUserDto: verify_identity): Promise<any> {
    //real password stored or hashing password
    const saltOrRounds = 10;
    const password = createUserDto.User_passcode;
    const hash = await bcy.hash(password, saltOrRounds);

    const User = {
      User_name: createUserDto.User_name,
      User_logo: createUserDto.User_logo,
      User_age: createUserDto.User_age,
      User_email: createUserDto.User_email,
      User_passcode: createUserDto.User_passcode,
      permission: createUserDto.permission,
      Date: new Date(),
    };
    const new_user = new this.Usermodel(User);
    return (await new_user.save()) + 'success';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
