import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User } from './schema/Users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Login_identity, verify_identity } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private Usermodel: Model<User>,
    private jwtService: JwtService,
  ) {}

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
        cause: new Error('User is present'),
        description: `User with this email is present in database`,
      };
      throw new BadRequestException(options, 'user already exists');
    }
  }

  async login(Login_user: Login_identity): Promise<any> {
    const User_exist = await this.Usermodel.findOne({
      User_email: Login_user.User_email,
    });
    const password = Login_user.User_passcode;
    const isMatch = await bcrypt.compare(password, User_exist.User_passcode);
    const payload = { sub: User_exist._id, username: User_exist.User_name };
    if (!User_exist && isMatch !== true) {
      const options = {
      return {
        access_token: await this.jwtService.signAsync(payload),
        success: 'logined',
      };
    } else {
      const options = {
        cause: new Error(),
        description: 'please enter the valid details...',
      };
      throw new ForbiddenException(options, 'unable to authenticate ..');
    }
  }
}
