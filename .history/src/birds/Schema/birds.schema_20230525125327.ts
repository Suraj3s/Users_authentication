import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsString, IsUUID } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type BirdsDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  @Prop()
  @IsUUID()
  Bird_id: string;

  @Prop()
  @IsArray()
  Bird_type: string[];

  @Prop()
  @IsArray()
  About_Bird: string[];

  @Prop()
  @IsString()
  
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
