/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type ClassDocument = T_Class & Document;
@Schema()
export class T_Class {
  @Prop()
  name: string;

  @Prop()
  class_key: string;

  @Prop()
  grade_id: Types.ObjectId;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  start_from: Date;

  @Prop()
  end_to: Date;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const ClassSchema = SchemaFactory.createForClass(T_Class);
