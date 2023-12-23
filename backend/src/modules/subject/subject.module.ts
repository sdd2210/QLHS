import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { EmailService } from 'src/common/mail.service';
import { SubjectSchema, T_Subject } from './schema/subject.schema';
import { GradeModule } from '../grade/grade.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Subject.name,
        schema: SubjectSchema,
        collection: 'subjects',
      },
    ]),
    GradeModule,
  ],
  providers: [SubjectService],
  controllers: [SubjectController],
  exports: [SubjectService],
})
export class SubjectModule {}
