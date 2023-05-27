import { PartialType } from '@nestjs/mapped-types';
export class UpdateBirdDto extends PartialType(CreateBirdDto) {}
