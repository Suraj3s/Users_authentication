import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
} from '@nestjs/common';
import { BirdsService } from './birds.service';
import { Bird_obj } from './dto/create-bird.dto';
import { UpdateBirdDto } from './dto/update-bird.dto';

@Controller('birds')
export class BirdsController {
  constructor(private readonly birdsService: BirdsService) {}

  @Post('create')
  async create(@Body() createBirdDto: Bird_obj): Promise<any> {
    try {
      return await this.birdsService.create(createBirdDto).then();
    } catch (err) {
      const options = { cause: new Error(), description: `${err}` };
      throw new ForbiddenException(options, 'something bad happened');
    }
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
