import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  User_name: string;

  @Prop()
  User_email: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(User);
