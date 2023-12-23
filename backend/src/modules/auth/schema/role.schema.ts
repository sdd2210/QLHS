import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  @Prop()
  role_name: string;

  @Prop()
  role_key: string;

  @Prop()
  list_privilege: Array<Types.ObjectId>;

  @Prop({ default: 0 })
  revoked: number;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
