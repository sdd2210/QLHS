import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    send(to: string, context: any, subject: string, template: string, iscc: boolean): Promise<void>;
}
