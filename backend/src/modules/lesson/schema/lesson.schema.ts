/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type LessonDocument = T_Lesson & Document;
@Schema()
export class T_Lesson {
  @Prop()
  Name: string;

  @Prop()
  startTime: Date;

  @Prop()
  endTime: Date;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const LessonSchema = SchemaFactory.createForClass(T_Lesson);
