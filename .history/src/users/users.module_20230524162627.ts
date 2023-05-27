import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './schema/Users.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
