/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type SubjectDocument = T_Subject & Document;
@Schema()
export class T_Subject {
  @Prop()
  name: string;

  @Prop()
  subject_id: string;

  @Prop()
  grade_id: Types.ObjectId;

  @Prop()
  description: string;

  @Prop()
  status: boolean;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const SubjectSchema = SchemaFactory.createForClass(T_Subject);
