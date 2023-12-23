/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RoomService } from './room.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller()
export class RoomController extends AppController {
  private readonly logger = new LoggerService();

  constructor(private roomService: RoomService) {
    super();
  }
  // private readonly emailService = new EmailService();

  @Post('/list_all')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.roomService.getAll(body.class_id);
  }

  @Post('/add_new')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async addNew(@Req() req, @Body() body: any) {
    return await this.roomService.addOne(body.name);
  }

  @Post('/delete')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async deleteOne(@Req() req, @Body() body: any) {
    return await this.roomService.deleteInfor(body.id);
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getStatics(@Req() req, @Param() param, @Body() body: any) {
    return await this.roomService.getStatics();
  }
}
