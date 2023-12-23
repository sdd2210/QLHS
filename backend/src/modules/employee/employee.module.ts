import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from 'src/common/mail.service';
import { EmployeeSchema, T_Employee } from './schema/employee.schema';
import { AuthModule } from '../auth/auth.module';
import { SubjectModule } from '../subject/subject.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Employee.name,
        schema: EmployeeSchema,
        collection: 'employee',
      },
    ]),
    AuthModule,
    SubjectModule,
  ],
  providers: [EmployeeService, EmailService],
  controllers: [EmployeeController],
  exports: [EmployeeService, EmailService],
})
export class EmployeeModule {}
