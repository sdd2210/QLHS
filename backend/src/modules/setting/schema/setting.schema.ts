import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MSchema } from 'mongoose';

export type SettingDocument = Setting & Document;

class SettingDetail {
  @Prop()
  key: string;

  @Prop({ type: MSchema.Types.Mixed })
  value: any;
}

@Schema()
export class Setting {
  @Prop()
  title: string;

  @Prop()
  details: Array<SettingDetail>;

  @Prop({ default: Date.now })
  create_at: Date;

  @Prop({ default: Date.now })
  update_at: Date;

  @Prop({ default: null })
  delete_at: Date;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
