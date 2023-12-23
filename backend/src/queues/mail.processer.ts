import { Process, Processor } from '@nestjs/bull';
import { Logger, Scope } from '@nestjs/common';
import { Job } from 'bull';
import { EmailService } from 'src/common/mail.service';

@Processor({ name: 'mailer', scope: Scope.REQUEST })
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  constructor(private emailService: EmailService) {}

  @Process()
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    this.logger.debug('Transcoding completed');
    const { to, context, title, template, isCC } = job.data;

    await this.emailService.send(to, context, title, template, isCC);
  }
}
