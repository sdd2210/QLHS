import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { SettingService } from 'src/modules/setting/setting.service';
export declare class MailConnectService implements MailerOptionsFactory {
    private config;
    private readonly logger;
    constructor(config: SettingService);
    createMailerOptions(): Promise<MailerOptions>;
}
