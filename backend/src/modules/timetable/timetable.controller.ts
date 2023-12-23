/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TimeTableService } from './timetable.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { AuthService } from '../auth/auth.service';

@Controller()
export class TimeTableController extends AppController {
  private readonly logger = new LoggerService();

  constructor(
    private customerService: TimeTableService,
    private authService: AuthService,
  ) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/getAll')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {}

  @Post('/getbyClass')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getbyClass(@Req() req, @Body() body: any) {
    const data = await this.customerService.getByClass(body.class_id);
    return data;
  }

  @Post('/add_new')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async createOne(@Req() req, @Body() body: any) {
    const {
      employee_id,
      SubjectId,
      date,
      end_date,
      lesson,
      workday,
      class_id,
      room_id,
    } = body;
    const data = await this.customerService.addLessontoClass(
      class_id,
      employee_id,
      SubjectId,
      new Date(date),
      new Date(end_date),
      lesson,
      workday,
      room_id,
    );
    return data;
  }

  @Post('/update')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async updateOne(@Req() req, @Body() body: any) {
    const {
      employee_id,
      SubjectId,
      startdate,
      enddate,
      lesson,
      workday,
      class_id,
      room_id,
    } = body;
    const data = await this.customerService.editLessontoClass(
      class_id,
      employee_id,
      SubjectId,
      new Date(startdate),
      new Date(enddate),
      lesson,
      workday,
      room_id,
    );
    return data;
  }
}
