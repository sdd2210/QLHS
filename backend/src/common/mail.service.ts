/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    // private readonly settingService: SettingService
  ) {}

  async send(to: string, context: any, subject: string, template: string, iscc : boolean) {
    try {
      const config = {
        to: to,
        subject: subject,
        cc: null,
        template: join(__dirname, '..', template),
        context: context,
      }
      if(iscc)
      {
        delete config.cc;
      }
      const sendEmail = await this.mailerService.sendMail({
        ...config,
      });
      console
    } catch (error) {
      console.log(error)
      // throw new HttpException(error.code, HttpStatus.BAD_REQUEST);
    }
    
  }
}
