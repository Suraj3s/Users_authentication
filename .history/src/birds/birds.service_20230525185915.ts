import { Injectable } from '@nestjs/common';
import { CreateBirdDto } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bird } from './Schema/birds.schema';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(Bird.name) private BirdModel: BirdM<Bird>){

  }

  create(createBirdDto: CreateBirdDto) {
    return 'This action adds a new bird';
  }

  findAll() {
    return `This action returns all birds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bird`;
  }

  update(id: number, updateBirdDto: UpdateBirdDto) {
    return `This action updates a #${id} bird`;
  }

  remove(id: number) {
    return `This action removes a #${id} bird`;
  }
}
