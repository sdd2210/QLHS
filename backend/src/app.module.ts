import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { EnvConfig } from './config/configuration';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppRoutes } from './app.router';
import { LevelModule } from './modules/level/level.module';
import { GradeModule } from './modules/grade/grade.module';
import { ClassModule } from './modules/class/class.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailConnectService } from './common/mailer.connect.service';
import { SettingModule } from './modules/setting/setting.module';
import { BullModule } from '@nestjs/bull';
import { CustomerModule } from './modules/student/student.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { SubjectModule } from './modules/subject/subject.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { TimeTableModule } from './modules/timetable/timetable.module';
import { SchoolYearModule } from './modules/schoolyear/schoolyear.module';
import { TestModule } from './modules/test/test.module';
import { GradebookModule } from './modules/gradebook/gradebook.module';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule,
    ThrottlerModule.forRoot({
      ttl: EnvConfig.Security.ThrottlerTTL,
      limit: EnvConfig.Security.ThrottlerLimit,
    }),
    AuthModule,
    LevelModule,
    GradeModule,
    ClassModule,
    SettingModule,
    CustomerModule,
    TimeTableModule,
    SchoolYearModule,
    TestModule,
    LessonModule,
    GradebookModule,
    RoomModule,
    TeacherModule,
    SubjectModule,
    EmployeeModule,
    RouterModule.register(AppRoutes),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          uri: `mongodb://${config.get<string>('DB_HOST')}:${config.get<number>(
            'DB_PORT',
          )}`,
          user: config.get<string>('DB_USER') || undefined,
          pass: config.get<string>('DB_PWD') || undefined,
          dbName: config.get<string>('DB_NAME') || undefined,
          useNewUrlParser: true,
          retryWrites: true,
          directConnection: true,
          bufferCommands: false,
          autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
        };
      },
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      imports: [SettingModule],
      useClass: MailConnectService,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          redis: {
            host: config.get<string>('REDIS_HOST') || 'localhost',
            port: config.get<number>('REDIS_PORT') || 6379,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
