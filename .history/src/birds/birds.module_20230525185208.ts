import { Module } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { BirdsController } from './birds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bird } from './Schema/birds.schema';

@Module({
  imports: [MongooseModule.forFeature([ name: Bird])]
  controllers: [BirdsController],
  providers: [BirdsService],
})
export class BirdsModule {}
