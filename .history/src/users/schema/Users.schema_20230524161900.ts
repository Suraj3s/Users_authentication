import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required: true})
  User_name: string;

  @Prop()
  User_email: string;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(User);
