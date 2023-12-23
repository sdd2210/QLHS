/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type SchoolYearDocument = T_SchoolYear & Document;

@Schema()
class Semester {
  @Prop()
  order: number;

  @Prop()
  start_date: Date;

  @Prop()
  end_date: Date;
}

@Schema()
export class T_SchoolYear {
  @Prop()
  name: string;

  @Prop()
  semester: Array<Semester>;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const SchoolYearSchema = SchemaFactory.createForClass(T_SchoolYear);
