import { Module } from '@nestjs/common';
import { GradebookService } from './gradebook.service';
import { GradebookController } from './gradebook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
// import { EmailService } from 'src/common/mail.service';
import { GradebookSchema, T_Gradebook } from './schema/gradebook.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: T_Gradebook.name,
        schema: GradebookSchema,
        collection: 'gradebook',
      },
    ]),
  ],
  providers: [GradebookService],
  controllers: [GradebookController],
  exports: [GradebookService],
})
export class GradebookModule {}
