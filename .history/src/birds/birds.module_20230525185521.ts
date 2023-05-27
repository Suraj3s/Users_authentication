import { Module } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { BirdsController } from './birds.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bird, BirdSchema } from './Schema/birds.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Birds'),
    MongooseModule.forFeature([{ name: Bird.name, schema: BirdSchema }]),
  ],
  controllers: [BirdsController],
  providers: [BirdsService],
})
export class BirdsModule {}
