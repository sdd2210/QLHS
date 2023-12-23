/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type RoomDocument = T_Room & Document;

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
export class T_Room {
  @Prop()
  name: string;

  @Prop()
  list_class: Array<ClassHistory>;

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

export const RoomSchema = SchemaFactory.createForClass(T_Room);
