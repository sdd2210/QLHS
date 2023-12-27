import { Job } from 'bull';
import { EmailService } from 'src/common/mail.service';
export declare class AudioProcessor {
    private emailService;
    private readonly logger;
    constructor(emailService: EmailService);
    handleTranscode(job: Job): Promise<void>;
}
