/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { LevelService } from './level.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { GradeService } from '../grade/grade.service';

@Controller()
export class LevelController extends AppController {
  private readonly logger = new LoggerService();

  constructor(
    private levelService: LevelService,
    private gradeService: GradeService,
  ) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/list_all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.levelService.getAll(body.grade_key);
  }

  @Post('/getkey/:key')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getInforBykey(@Param('key') key: any) {
    const data = await this.levelService.getInforByKey(key);
    const grade_infor = await this.gradeService.getAll(data._id.toString());
    return grade_infor;
  }

  @Post('/getgrade/:key')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getInforBygrade(@Param('key') key: any) {
    const data = await this.levelService.getInforByGrade(key);
    return data;
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getStatics(@Req() req, @Param() param, @Body() body: any) {
    return await this.levelService.getStatics();
  }
}
