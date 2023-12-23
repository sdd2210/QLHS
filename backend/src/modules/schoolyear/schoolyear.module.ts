import { Module } from '@nestjs/common';
import { SchoolYearService } from './schoolyear.service';
import { SchoolYearController } from './schoolyear.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { EmailService } from 'src/common/mail.service';
import { SchoolYearSchema, T_SchoolYear } from './schema/schoolyear.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_SchoolYear.name,
        schema: SchoolYearSchema,
        collection: 'schoolyear',
      },
    ]),
  ],
  providers: [SchoolYearService],
  controllers: [SchoolYearController],
  exports: [SchoolYearService],
})
export class SchoolYearModule {}
