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
import { GradeService } from './grade.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller()
export class GradeController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private gradeService: GradeService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/list_all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.gradeService.getAll(body.level_id);
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getStatics(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.getStatics();
  }

  @Post('/getby_key')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getByKey(@Req() req, @Body() body: any) {
    return await this.gradeService.getByKey(body.key);
  }
  @Post('/getby_id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getByID(@Req() req, @Body() body: any) {
    return await this.gradeService.getByID(body.id);
  }
}
