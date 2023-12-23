import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema, T_Account } from './schema/t_account.schema';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt-auth.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { OauthAccessTokenSchema } from './schema/oauth_access_tokens.schema';
import { PassportModule } from '@nestjs/passport';
import { EmailService } from 'src/common/mail.service';
import { BullModule } from '@nestjs/bull';
import { AudioProcessor } from 'src/queues/mail.processer';
import { Role, RoleSchema } from './schema/role.schema';
import { SchoolYearModule } from '../schoolyear/schoolyear.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Account.name,
        schema: AccountSchema,
        collection: 't_account',
      },
      {
        name: Role.name,
        schema: RoleSchema,
        collection: 'roles',
      },
      {
        name: 'oauth_access_tokens',
        schema: OauthAccessTokenSchema,
        collection: 'oauth_access_tokens',
      },
    ]),
    PassportModule,
    SchoolYearModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60000s' },
    }),
    BullModule.registerQueue({
      name: 'mailer',
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    EmailService,
    AudioProcessor,
  ],
  exports: [AuthService],
})
export class AuthModule {}
