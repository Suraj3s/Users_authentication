import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type BirdsDocument = HydratedDocument<Bird>;

@Schema()
export class Bird {
  
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
