import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, StringExpressionOperatorReturningString } from 'mongoose';

export type UsersDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  User_name: string;

  @Prop()
  User_email: ;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(User);
