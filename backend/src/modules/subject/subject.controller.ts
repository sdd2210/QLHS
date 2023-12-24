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
import { SubjectService } from './subject.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller()
export class SubjectController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private gradeService: SubjectService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/addnew')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async creatOne(@Req() req, @Body() body: any) {
    return await this.gradeService.createOne(body);
  }

  @Post('/list_all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.gradeService.getAll(body.grade_key);
  }

  @Post('/edit/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async editOne(@Param() param, @Req() req, @Body() body: any) {
    return await this.gradeService.editOne(param.id, body);
  }

  @Post('/delete/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async deleteOne(@Param() param, @Req() req, @Body() body: any) {
    return await this.gradeService.deleteOne(param.id);
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getStatics(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.getStatics();
  }

  @Get('/common')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getCommon(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.getCommon();
  }
}
