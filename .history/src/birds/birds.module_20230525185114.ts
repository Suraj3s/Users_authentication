import { Module } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { BirdsController } from './birds.controller';

@Module({
  imports: 
  controllers: [BirdsController],
  providers: [BirdsService],
})
export class BirdsModule {}
