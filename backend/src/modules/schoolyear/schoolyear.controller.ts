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
import { SchoolYearService } from './schoolyear.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller()
export class SchoolYearController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private gradeService: SchoolYearService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/list_all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.gradeService.getAll();
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getStatics(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.getStatics();
  }

  @Post('/addnew')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async addNew(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.addOne(body);
  }

  @Get('/current_semester')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getCurrentSemester(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.getCurrentSemester();
  }

  @Get('/current_schoolyear')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getCurrentSchoolYear(@Req() req, @Param() param, @Body() body: any) {
    return await this.gradeService.getStatics();
  }
}
