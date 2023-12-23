/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GradebookService } from './gradebook.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller()
export class GradebookController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private gradebookService: GradebookService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/list_by_class')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.gradebookService.getAll(
      body.class_id,
      body.subject_id,
      body.student_id,
      body.semester,
    );
  }

  @Post('/update')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async upsertData(@Req() req, @Body() body: any) {
    return await this.gradebookService.upsertScroce(
      body.class_id,
      body.subject_id,
      body.list_value,
      body.semester,
    );
  }
}
