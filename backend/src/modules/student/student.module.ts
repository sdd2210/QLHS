import { Module } from '@nestjs/common';
import { CustomerService } from './student.service';
import { CustomerController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from 'src/common/mail.service';
import { StudentSchema, T_Student } from './schema/student.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Student.name,
        schema: StudentSchema,
        collection: 'students',
      },
    ]),
    AuthModule,
  ],
  providers: [CustomerService, EmailService],
  controllers: [CustomerController],
  exports: [CustomerService, EmailService],
})
export class CustomerModule {}
