/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type TimeTableDocument = T_TimeTable & Document;

class SubjectList {
  @Prop()
  subject_id: Types.ObjectId;

  @Prop()
  teacher_id: Types.ObjectId;

  @Prop()
  room_id: Types.ObjectId;

  @Prop()
  order: number;

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;
}

class ClassHistory {
  @Prop()
  lesson_id: Types.ObjectId;

  @Prop()
  list_subject: Array<SubjectList>;

  @Prop()
  order: number;

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;
}

@Schema()
export class T_TimeTable {
  @Prop()
  class_id: Types.ObjectId;

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;

  @Prop()
  list_lesson: ClassHistory[];

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const TimeTableSchema = SchemaFactory.createForClass(T_TimeTable);
