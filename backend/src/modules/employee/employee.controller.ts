/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { EmployeeService } from './employee.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';
import { AuthService } from '../auth/auth.service';
import { SubjectService } from '../subject/subject.service';

@Controller()
export class EmployeeController extends AppController {
  private readonly logger = new LoggerService();

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private subjectService: SubjectService,
  ) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/getAll')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.employeeService.getAll(
      body.searchstring,
      body.subject_id,
      body.status,
      body.rowsPerpage,
      body.currentPage,
    );
  }

  @Post('/infor')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getInfor(@Req() req, @Body() body: any) {
    return await this.employeeService.getInfor(body.id);
  }

  @Post('/add_new')
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
      body.role_key,
    );

    const new_student = await this.employeeService.createEmployee({
      ...body,
      account_id: new_user._id,
    });
    return new_student;
  }

  @Post('/add_many')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async createMany(@Req() req, @Body() body_list: any) {
    let i = 0;
    for (const body of body_list) {
      try {
        const { subject_key } = body;
        const subject = await this.subjectService.getInforByAlias(subject_key);

        body['subject_id'] = subject._id;
        const new_user = await this.authService.addNew(
          body.user_name,
          '123456',
          body.full_name,
          body.gender,
          body.phone,
          body.email,
          body.dob ? new Date(body.dob) : undefined,
          body.role_key,
        );

        const new_student = await this.employeeService.createEmployee({
          ...body,
          account_id: new_user._id,
        });

        console.log(!new_student, i);
        i++;
      } catch (error) {
        if (error.status != 403) {
          console.log(error);
          console.log(body);
        }
        console.log(i, body);
        continue;
      }
    }
  }

  @Post('/delete/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async DeleteOne(@Param() param, @Req() req, @Body() body: any) {
    const new_student = await this.employeeService.deleteOne(body.id);
    const new_user = await this.authService.deleteOne(
      new_student.account_id.toString(),
    );
    return new_student;
  }

  @Post('/edit/:id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async UpdateOne(@Param() param, @Req() req, @Body() body: any) {
    const new_user = await this.authService.updateUser(
      body.account_id,
      body.full_name,
      body.user_name,
      body.email,
      body.gender,
      body.phone,
      body.dob ? new Date(body.dob) : undefined,
    );

    const new_student = await this.employeeService.updateEmployee(param.id, {
      ...body,
      account_id: new_user._id,
    });
    return new_student;
  }
}
