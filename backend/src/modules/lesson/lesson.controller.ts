/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LessonService } from './lesson.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { AuthService } from '../auth/auth.service';

@Controller()
export class LessonController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private customerService: LessonService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/getAll')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.customerService.getAll(
      body.searchstring,
      body.class_id,
      body.status,
      body.rowsPerpage,
      body.currentPage,
    );
  }

  @Post('/add_new')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async createOne(@Req() req, @Body() body: any) {}
}
