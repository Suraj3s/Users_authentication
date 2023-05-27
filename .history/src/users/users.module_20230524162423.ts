import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature('users',)],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
