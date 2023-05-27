import { Injectable } from '@nestjs/common';
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

    if(!User_exist){

    }
    
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
