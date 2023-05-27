import { Module } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { BirdsController } from './birds.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.]
  controllers: [BirdsController],
  providers: [BirdsService],
})
export class BirdsModule {}
