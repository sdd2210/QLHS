/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TeacherService } from './teacher.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { AuthService } from '../auth/auth.service';

@Controller()
export class TeacherController extends AppController {
  private readonly logger = new LoggerService();

  constructor(
    private teacherService: TeacherService,
    private authService: AuthService,
  ) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/getAll')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.teacherService.getAll(
      body.searchstring,
      body.class_id,
      body.status,
      body.rowsPerpage,
      body.currentPage,
    );
  }

  @Post('/add_new_homeroom')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async createOne(@Req() req, @Body() body: any) {
    const new_user = await this.authService.addNew(
      body.user_name,
      '123456',
      body.full_name,
      body.gender,
      body.phone,
      body.email,
      body.dob ? new Date(body.dob) : undefined,
      'TEACHER',
    );

    const new_student = await this.teacherService.createTeacher({
      ...body,
      account_id: new_user._id,
    });
    return new_student;
  }

  @Post('/add_new_subject')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async createSubjectOne(@Req() req, @Body() body: any) {
    const new_user = await this.authService.addNew(
      body.user_name,
      '123456',
      body.full_name,
      body.gender,
      body.phone,
      body.email,
      body.dob ? new Date(body.dob) : undefined,
      'TEACHER2',
    );

    const new_student = await this.teacherService.createTeacher({
      ...body,
      account_id: new_user._id,
    });
    return new_student;
  }
}
