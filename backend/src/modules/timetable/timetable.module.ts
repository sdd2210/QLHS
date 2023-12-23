import { Module } from '@nestjs/common';
import { TimeTableService } from './timetable.service';
import { TimeTableController } from './timetable.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from 'src/common/mail.service';
import { TimeTableSchema, T_TimeTable } from './schema/timetable.schema';
import { AuthModule } from '../auth/auth.module';
import { LessonModule } from '../lesson/lesson.module';
import { EmployeeModule } from '../employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_TimeTable.name,
        schema: TimeTableSchema,
        collection: 'timetables',
      },
    ]),
    AuthModule,
    LessonModule,
    EmployeeModule,
  ],
  providers: [TimeTableService, EmailService],
  controllers: [TimeTableController],
  exports: [TimeTableService, EmailService],
})
export class TimeTableModule {}
