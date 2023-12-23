import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PrivilegeDocument = Privilege & Document;

@Schema()
export class Privilege {
  @Prop()
  privilege_name: string;

  @Prop()
  privilege_discription: string;

  @Prop()
  method: string;

  @Prop()
  url: string;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const PrivilegeSchema = SchemaFactory.createForClass(Privilege);
