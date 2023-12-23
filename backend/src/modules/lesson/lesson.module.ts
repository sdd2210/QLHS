import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from 'src/common/mail.service';
import { LessonSchema, T_Lesson } from './schema/lesson.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Lesson.name,
        schema: LessonSchema,
        collection: 'lessons',
      },
    ]),
  ],
  providers: [LessonService, EmailService],
  controllers: [LessonController],
  exports: [LessonService, EmailService],
})
export class LessonModule {}
