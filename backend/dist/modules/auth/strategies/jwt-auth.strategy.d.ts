import { Model } from 'mongoose';
import { Strategy } from 'passport-jwt';
import { OauthAccessTokenDocument } from '../schema/oauth_access_tokens.schema';
import { AccountDocument } from '../schema/t_account.schema';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private oauthAccessToken;
    private adminModel;
    constructor(oauthAccessToken: Model<OauthAccessTokenDocument>, adminModel: Model<AccountDocument>);
    validate(payload: any): Promise<{
        _id: any;
        user_name: any;
        token: any;
        ref_family_id: any;
        role: any;
    }>;
}
export {};
