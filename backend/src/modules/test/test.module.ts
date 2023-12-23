import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from 'src/common/mail.service';
import { TestSchema, T_Test } from './schema/test.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Test.name,
        schema: TestSchema,
        collection: 'test',
      },
    ]),
  ],
  providers: [TestService, EmailService],
  controllers: [TestController],
  exports: [TestService, EmailService],
})
export class TestModule {}
