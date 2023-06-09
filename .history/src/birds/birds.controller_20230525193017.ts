import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BirdsService } from './birds.service';
import { Bird_obj } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Controller('birds')
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post('create')
  create(@Body() createBirdDto: Bird_obj) {
    return this.birdsService.create(createBirdDto).then();
  }

  @Get()
  findAll() {
    return this.birdsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.birdsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBirdDto: UpdateBirdDto) {
    return this.birdsService.update(+id, updateBirdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birdsService.remove(+id);
  }
}
