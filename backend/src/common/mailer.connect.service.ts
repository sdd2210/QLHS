/* eslint-disable prettier/prettier */
import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { SettingService } from 'src/modules/setting/setting.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { LoggerService } from './custom.logger';

@Injectable({ scope: Scope.REQUEST })
export class MailConnectService implements MailerOptionsFactory {
  private readonly logger = new LoggerService();

  constructor(private config: SettingService) {}

  async createMailerOptions(): Promise<MailerOptions> {
    try {
      const settingParam = await this.config.getEmail();
      return {
        // transport: `smtps://${settingParam.email}:${settingParam.password}@${settingParam.host}`,
        transport: {
          host: settingParam.host,
          port: settingParam.port,
          auth: {
            user: settingParam.email,
            pass: settingParam.password,
          },
          secure: settingParam.secure,
          connectionTimeout: settingParam.timeout,
        },
        defaults: {
          from: `"${settingParam.from_name}" <${settingParam.from}>`,
          cc: settingParam.cc,
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(undefined, {
            inlineCssEnabled: true,
            inlineCssOptions: { url: ' ' },
          }),
          options: {
            strict: true,
          },
        },
        options: {
          strict: true,
        },
      };
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
