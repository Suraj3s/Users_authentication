import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsString, IsUUID } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type BirdsDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  @Prop()
  @IsUUID({ required: true })
  Bird_id: string;

  @Prop({ required: true })
  @IsArray()
  Bird_type: string[];

  @Prop({ required: true })
  @IsArray()
  About_Bird: string[];

  @Prop({ required: true })
  @IsString()
  Bird_weight: string;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
