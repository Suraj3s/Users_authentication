import {
  Controller,
  Get,
  Post,
  Body,
  BadRequestException,
  ForbiddenException,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Login_identity, verify_identity } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('SignUp')
  @UseInterceptors()
  create(@Body() createUserDto: verify_identity) {
    try {
      if (createUserDto.permission == true) {
        const options = {
          cause: new Error(),
          description: `your not allowed to access the databse`,
        };
        throw new ForbiddenException(options, 'error to access the database');
      } else {
        return this.usersService.create(createUserDto);
      }
    } catch (err) {
      const options = {
        cause: new Error(),
        description: `${err}`,
      };
      throw new BadRequestException(options, 'error to access the database');
    }
  }

  @Get('Login')
  async login(@Body() loginUserDto: Login_identity): Promise<any> {
    try {
      return await this.usersService.login(loginUserDto);
    } catch (err) {
      const options = {
        cause: new Error(),
        description: `${err}`,
      };
      throw new BadRequestException(options, 'error to access the database');
    }
  }
}
