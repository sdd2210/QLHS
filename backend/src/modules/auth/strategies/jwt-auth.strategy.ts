import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { OauthAccessTokenDocument } from '../schema/oauth_access_tokens.schema';
import { AccountDocument, T_Account } from '../schema/t_account.schema';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel('oauth_access_tokens')
    private oauthAccessToken: Model<OauthAccessTokenDocument>,

    @InjectModel(T_Account.name)
    private adminModel: Model<AccountDocument>,
  ) {
    super({
      //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-cookie'];
          if (!data) {
            return null;
          }
          return data;
        },
      ]),
    });
  }

  async validate(payload: any) {
    const userToken = await this.oauthAccessToken
      .findOne({ token: payload.token })
      .lean();

    if (!userToken) {
      throw new UnauthorizedException('Token expire');
    }
    if (userToken.revoked === 1) {
      throw new UnauthorizedException('Token hết hạn');
    }
    const adminInfor = await this.adminModel.findById(userToken.user_id);
    if (adminInfor == null || adminInfor.delete_at != null) {
      throw new UnauthorizedException('Không có tài khoản này trong hệ thống');
    }

    return {
      _id: payload.sub,
      user_name: payload.username,
      token: payload.token,
      ref_family_id: payload.ref_family_id,
      role: payload.role,
    };
  }
}
