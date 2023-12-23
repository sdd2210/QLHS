import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from 'src/common/mail.service';
import { TeacherSchema, T_Teacher } from './schema/teacher.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Teacher.name,
        schema: TeacherSchema,
        collection: 'teachers',
      },
    ]),
    AuthModule,
  ],
  providers: [TeacherService, EmailService],
  controllers: [TeacherController],
  exports: [TeacherService, EmailService],
})
export class TeacherModule {}
