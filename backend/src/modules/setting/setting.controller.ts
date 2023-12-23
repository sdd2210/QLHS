/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SettingService } from './setting.service';
import { AppController } from 'src/app.controller';
import { LoggerService } from 'src/common/custom.logger';
import { Roles } from '../auth/decorator/role.decorator';
import { RoleGuard } from '../auth/guards/role.guard';

@Controller()
export class SettingController extends AppController {
  // private readonly logger = new LoggerService();

  constructor(private settingService: SettingService) {
    super();
  }

  @Post('/listall')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async getAll(@Req() req, @Body() body: any) {
    return await this.settingService.getAll();
  }

  @Post('/update/:id')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async updateInfor(@Param() param, @Body() body: any) {
    const details = body.details;

    if (!Array.isArray(details)) {
      throw new HttpException('Sai định dạng', HttpStatus.BAD_REQUEST);
    }

    const result = await this.settingService.updateSetting(param.id, details);
    return result;
  }
}
