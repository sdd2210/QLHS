/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type EmployeeDocument = T_Employee & Document;
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
export class T_Employee {
  @Prop()
  account_id: Types.ObjectId;

  @Prop()
  avatar_url: string;

  @Prop()
  employee_alias_string: string;

  @Prop()
  employee_alias_number: number;

  @Prop()
  thumbnail_url: string;

  @Prop()
  subject_id: Types.ObjectId;

  @Prop()
  class_list: Array<ClassHistory>;

  @Prop()
  address: string;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(T_Employee);
