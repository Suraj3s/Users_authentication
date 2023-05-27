import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsUUID } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type BirdsDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  @Prop()
  @IsUUID()
  Bird_id: string;

  @Prop()
  @IsArray()
  
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
