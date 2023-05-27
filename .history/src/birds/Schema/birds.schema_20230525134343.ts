import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsArray, IsDate, IsLatLong, IsString, IsUUID, IsUrl, isBase64, isDataURI } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type BirdsDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  @Prop({ required: true })
  @IsUUID()
  Bird_id: string;

  @Prop({ required: true })
  @IsString()
  Bird_name: string;

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

  @Prop({ required: true })
  @IsArray()
  @IsUrl()
  Bird_Images: string[];

  @Prop({ required: true })
  @IsArray()
  @IsUrl()
  Bird_videos: string[];

  @Prop({ required: true })
  @IsUrl()
  Bird_sound: string[];

  @Prop()
  @IsLatLong()
  Bird_locate: string;

  @Prop()
  Bird_file: any;

  @Prop({ default: new Date()})
  @IsDate()
  date_created: string;
  


}

export const BirdSchema = SchemaFactory.createForClass(Bird);
