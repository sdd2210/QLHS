/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type GradebookDocument = T_Gradebook & Document;

@Schema()
class Test {
  @Prop()
  test_id: Types.ObjectId;

  @Prop()
  value: string;
}

@Schema()
export class T_Gradebook {
  @Prop()
  class_id: Types.ObjectId;

  @Prop()
  student_id: Types.ObjectId;

  @Prop()
  subject_id: Types.ObjectId;

  @Prop()
  list_test: Array<Test>;

  @Prop()
  semester: number;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const GradebookSchema = SchemaFactory.createForClass(T_Gradebook);
