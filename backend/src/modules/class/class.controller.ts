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
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { ClassService } from './class.service';

@Controller()
export class ClassController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private classService: ClassService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/list_all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.classService.getAll(
      body.grade_id,
      body.grade_key,
      body.searchstring,
      body.user_id,
    );
  }

  @Post('/create')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async Create(@Req() req, @Body() body: any) {
    return await this.classService.addNew(body.class_name, body.grade_id);
  }

  @Post('delete/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async DeleteId(@Req() req, @Param() param, @Body() body: any) {
    return await this.classService.deleteOne(param.id);
  }

  @Post('/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getById(@Req() req, @Param() param, @Body() body: any) {
    return await this.classService.getByID(param.id);
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getStatics(@Req() req, @Param() param, @Body() body: any) {
    return await this.classService.getStatics();
  }
}
