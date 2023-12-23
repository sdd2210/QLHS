import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OauthAccessTokenDocument = OauthAccessToken & Document;

@Schema()
export class OauthAccessToken {
  @Prop()
  token: string;

  @Prop()
  user_id: string;

  @Prop()
  ref_family_id: string;

  @Prop({ default: 0 })
  revoked: number;

  @Prop({ default: Date.now })
  created_at: Date;

  @Prop({ default: Date.now })
  updated_at: Date;
}

export const OauthAccessTokenSchema =
  SchemaFactory.createForClass(OauthAccessToken);
