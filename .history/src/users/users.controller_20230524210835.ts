import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Login_identity, verify_identity } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('SignIn')
  create(@Body() createUserDto: verify_identity) {
    try {
      if(createUserDto.permission == tr)
    } catch (err) {
      const options = {
        cause: new Error(),
        description: `${err}`,
      };
      throw new BadRequestException(options, 'error to access the database');
    }
  }

  @Get('Login')
  login(@Body() loginUserDto: Login_identity) {
    try {
      return this.usersService.login(loginUserDto);
    } catch (err) {
      const options = {
        cause: new Error(),
        description: `${err}`,
      };
      throw new BadRequestException(options, 'error to access the database');
    }
  }
}
