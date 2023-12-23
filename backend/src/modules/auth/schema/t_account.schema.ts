/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type AccountDocument = T_Account & Document;
@Schema()
export class T_Account {
  @Prop()
  @MinLength(3, { message: 'user_name không được ngắn hơn quá 3 ký tự' })
  @MaxLength(50, { message: 'user_name không được quá 50 ký tự' })
  user_name: string;

  @Prop()
  password: string;

  @Prop()
  full_name: string;

  @Prop()
  avatar_url: string;

  @Prop()
  thumbnail_url: string;

  @Prop()
  ref_family_id: string;

  @Prop()
  birth_day: Date;

  @Prop()
  is_reset: boolean;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  registration_date: Date;

  @Prop()
  gender: number;

  @Prop()
  role_key: string;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const AccountSchema = SchemaFactory.createForClass(T_Account);
