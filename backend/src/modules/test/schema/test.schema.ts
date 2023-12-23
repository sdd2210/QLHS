/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type TestDocument = T_Test & Document;
@Schema()
class Exam {
  @Prop()
  exam_id: Types.ObjectId;
  @Prop()
  order: number;
}
@Schema()
export class T_Test {
  @Prop()
  name: string;

  @Prop()
  alias: string;

  @Prop()
  list_exam: Array<Exam>;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const TestSchema = SchemaFactory.createForClass(T_Test);
