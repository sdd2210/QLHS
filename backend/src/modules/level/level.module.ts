import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { EmailService } from 'src/common/mail.service';
import { LevelSchema, T_Level } from './schema/level.schema';
import { GradeService } from '../grade/grade.service';
import { T_Grade, GradeSchema } from '../grade/schema/grade.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Level.name,
        schema: LevelSchema,
        collection: 'levels',
      },
      {
        name: T_Grade.name,
        schema: GradeSchema,
        collection: 'grades',
      },
    ]),
  ],
  providers: [LevelService, GradeService],
  controllers: [LevelController],
  exports: [LevelService],
})
export class LevelModule {}
