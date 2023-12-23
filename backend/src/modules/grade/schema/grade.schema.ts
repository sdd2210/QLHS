/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type GradeDocument = T_Grade & Document;
@Schema()
export class T_Grade {
  @Prop()
  name: string;

  @Prop()
  grade_key: string;

  @Prop()
  level_id: Types.ObjectId;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const GradeSchema = SchemaFactory.createForClass(T_Grade);
