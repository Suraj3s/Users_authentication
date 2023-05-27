import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './schema/Users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { verify_identity } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private Usermodel: Model<User>) {}

  async create(createUserDto: verify_identity): Promise<any> {
    //real password stored or hashing password
    const saltOrRounds = 10;
    const password = createUserDto.User_passcode;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const salt = await bcrypt.genSalt();
    const User_exist = await this.Usermodel.findOne({
      User_email: createUserDto.User_email,
    });

    if (!User_exist) {
      const User = {
        User_name: createUserDto.User_name,
        User_logo: createUserDto.User_logo,
        User_age: createUserDto.User_age,
        User_email: createUserDto.User_email,
        User_passcode: hash + salt,
        permission: createUserDto.permission,
        Date: new Date(),
      };
      const new_user = new this.Usermodel(User);
      return (await new_user.save()) + 'success';
    } else {
      const options = {
        cause: new Error("User is present"),
        description: `user with email is present in database`,
      };
      throw new BadRequestException(options, 'user already exists');
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
