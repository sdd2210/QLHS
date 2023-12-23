/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type StudentDocument = T_Student & Document;
@Schema()
class ClassHistory {
  @Prop()
  class_id: Types.ObjectId;

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;
}

@Schema()
export class T_Student {
  @Prop()
  account_id: Types.ObjectId;

  @Prop()
  avatar_url: string;

  @Prop()
  student_alias_string: string;

  @Prop()
  student_alias_number: number;

  @Prop()
  thumbnail_url: string;

  @Prop()
  parent_name: string;

  @Prop()
  address: string;

  @Prop()
  class_id: Types.ObjectId;

  @Prop()
  class_list: ClassHistory[];

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const StudentSchema = SchemaFactory.createForClass(T_Student);
