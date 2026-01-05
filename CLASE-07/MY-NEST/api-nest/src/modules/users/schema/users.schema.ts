import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// HydratedDocument sirve para tipar los documentos que se obtienen de la base de datos
// y proporciona autocompletado y validaciones de tipo. Es una instancia del documento de Mongoose
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
// UserSchema.index({ email: 1 });
