import { Module } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { BirdsController } from './birds.controller';
import mongoose from 'mongoose';

@Module({
  imports: mongoose.
  controllers: [BirdsController],
  providers: [BirdsService],
})
export class BirdsModule {}
