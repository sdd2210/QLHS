import { Module } from '@nestjs/common';
import { SettingService } from './setting.service';
import { SettingController } from './setting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SettingSchema } from './schema/setting.schema';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: 'm_setting',
        schema: SettingSchema,
        collection: 'm_setting',
      },
    ]),
    MailerModule,
  ],
  providers: [SettingService],
  controllers: [SettingController],
  exports: [SettingService],
})
export class SettingModule {}
