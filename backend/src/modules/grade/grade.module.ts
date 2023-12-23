import { Module } from '@nestjs/common';
import { GradeService } from './grade.service';
import { GradeController } from './grade.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { EmailService } from 'src/common/mail.service';
import { GradeSchema, T_Grade } from './schema/grade.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Grade.name,
        schema: GradeSchema,
        collection: 'grades',
      },
    ]),
  ],
  providers: [GradeService],
  controllers: [GradeController],
  exports: [GradeService],
})
export class GradeModule {}
