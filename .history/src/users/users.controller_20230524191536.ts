import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { verify_identity } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: verify_identity) {
    try {
      if(this.usersService.findOne(User))
    } catch (err) {
      const options = {
        cause: new Error(),
        description: `${err}`,
      };
      throw new BadRequestException(options, 'error to access the database');
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
