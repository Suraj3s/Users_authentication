import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IS_URL, IsArray, IsString, IsUUID, IsUrl, isURL } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type BirdsDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  @Prop({ required: true })
  @IsUUID()
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

  @Prop({ required: true })
  @IsString()
  Bird_height: string;

  @Prop()
  @IsString()
  Scientific_name: string;

  @Prop()
  @IsArray()
  @IsUrl()
  Bird_Images: string[];

  @Prop()
  @IsArray()
  @IsUrl()
  Bird_videos: string[]


 
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
