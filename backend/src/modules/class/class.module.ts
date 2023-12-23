import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ClassSchema, T_Class } from './schema/class.schema';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { AuthModule } from '../auth/auth.module';
// import { EmailService } from 'src/common/mail.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Class.name,
        schema: ClassSchema,
        collection: 'classes',
      },
    ]),
    AuthModule,
  ],
  providers: [ClassService],
  controllers: [ClassController],
  exports: [ClassService],
})
export class ClassModule {}
