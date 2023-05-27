import { Injectable } from '@nestjs/common';
import { Bird_obj } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Bird } from './Schema/birds.schema';
import { Model } from 'mongoose';

@Injectable()
export class BirdsService {
  constructor(@InjectModel(Bird.name) private BirdModel: Model<Bird>) {}

  create(createBirdDto: Bird_obj) {
    let Bird = {
      Bird_id: new uu
  Bird_name: string;
  Bird_type: string[];
  About_Bird: string[];
  Bird_weight: string;
  Bird_height: string;
  Scientific_name: string;
  Bird_Images: any[];
  Bird_videos: any[];
  Bird_sound: any[];
  Bird_locate: string;
  Bird_file: any;
    }
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
