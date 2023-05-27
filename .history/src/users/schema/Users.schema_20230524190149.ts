import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsDataURI, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  @IsString()
  User_name: string;

  @Prop({ required: true })
  User_logo: string;

  @Prop({ required: true })
  @IsNumber()
  User_age: string;

  @Prop({ required: true })
  @IsEmail()
  User_email: string;

  @Prop({ required: true })
  @IsNotEmpty()
  User_passcode: string;

  @Prop({ required: true, default: false })
  permission: boolean;

  @Prop({ required: false, default: new Date() })
  @IsDataURI()
  Date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
