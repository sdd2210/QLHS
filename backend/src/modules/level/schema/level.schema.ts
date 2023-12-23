/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { IsString, MaxLength, MinLength } from 'class-validator';

export type LevelDocument = T_Level & Document;
@Schema()
export class T_Level {
  @Prop()
  name: string;

  @Prop()
  level_key: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const LevelSchema = SchemaFactory.createForClass(T_Level);
