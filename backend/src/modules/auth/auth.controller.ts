/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UseGuards,
  Request,
  Req,
  Body,
  Get,
  Param,
} from '@nestjs/common';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoggerService } from 'src/common/custom.logger';
import { AuthService } from './auth.service';
import { AccountDocument, T_Account } from './schema/t_account.schema';
import { AppController } from 'src/app.controller';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Roles } from './decorator/role.decorator';
import { RoleGuard } from './guards/role.guard';
import { PhoneMailValidationPipe } from 'src/common/phonemail.validation.pipe';
import { EmailService } from 'src/common/mail.service';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Controller()
export class AuthController extends AppController {
  private readonly logger = new LoggerService();
  constructor(
    private authService: AuthService,
    private emailService: EmailService,
    @InjectQueue('mailer') private readonly mailQueue: Queue,
  ) {
    super();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Res({ passthrough: true }) res: Response) {
    try {
      const dataLogin = await this.authService.logIn(req.user);
      const token = dataLogin.accessToken;
      if (token) {
        res.cookie('auth-cookie', token, {
          httpOnly: true,
          path: '/api/',
        });
      }
      return dataLogin;
    } catch (error) {
      this.logger.error(error.stack);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('/reset_pass')
  async resetPass(
    @Request() req,
    @Body() body,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const { id, new_pwd } = body;
      const dataLogin = await this.authService.reCreatePass(id, new_pwd);
      console.log(dataLogin);
      const token = dataLogin.accessToken;
      if (token) {
        res.cookie('auth-cookie', token, {
          httpOnly: true,
          path: '/api/',
        });
      }
      return dataLogin;
    } catch (error) {
      this.logger.error(error.stack);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('/logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Request() req, @Res({ passthrough: true }) res: Response) {
    try {
      const token = req.user.token;
      res.cookie('auth-cookie', '', { httpOnly: true, path: '/api/' });
      return this.authService.onRevokeToken(token);
    } catch (error) {
      this.logger.error(error.stack);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('/infor_user')
  @UseGuards(JwtAuthGuard)
  async getInfor(@Req() req, @Res({ passthrough: true }) res: Response) {
    try {
      const id = req.user._id;
      return this.authService.getInfor(id);
    } catch (error) {
      this.logger.error(error.stack);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Get('/statics')
  @UseGuards(JwtAuthGuard)
  async getStatic(@Req() req, @Res({ passthrough: true }) res: Response) {
    try {
      return this.authService.getStatics();
    } catch (error) {
      this.logger.error(error.stack);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('/update_infor')
  @UseGuards(JwtAuthGuard)
  async UpdateInfor(
    @Req() req,
    @Body(new PhoneMailValidationPipe()) body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { full_name, email, phone, gender, user_name, address, parent_name } =
      body;
    let birth_day = body.birth_day;
    if (birth_day) {
      birth_day = new Date(birth_day);
    }
    const result = await this.authService.updateUser(
      req.user._id,
      full_name,
      user_name,
      email,
      gender,
      phone,
      birth_day,
      address,
      parent_name,
    );
    return result;
  }

  @Post('/resetpassword')
  @UseGuards(JwtAuthGuard)
  async ResetPassword(
    @Req() req,
    @Body() body,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { cur_pwd, new_pwd } = body;
    const result = await this.authService.resetPassword(
      req.user._id,
      new_pwd,
      cur_pwd,
    );
    return result;
  }

  @Post('/forgot_pwd')
  @UseGuards(JwtAuthGuard)
  async ForgotPass(
    @Req() req,
    @Body() body,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { email } = body;
    const result = await this.authService.forgotPass(email);
    if (result) {
      await this.mailQueue.add({
        to: result.email,
        context: {
          user_name: result.user_name,
          new_password: '123456',
        },
        title: '[Thông báo nhà trường] Thay đổi mật khẩu',
        template: 'templates/resetpwdemail.template.hbs',
        isCC: false,
      });
    }
    return result;
  }

  @Post('/alluser')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async GetAllUser(
    @Req() req,
    @Body() body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const result = await this.authService.getAll(
        req.user._id,
        body.searchstring,
        body.rowsPerpage,
        body.currentPage,
      );
      return result;
    } catch (error) {
      this.logger.error(error.stack);
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  @Post('/updateuser')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async UpdateUser(
    @Req() req,
    @Body(new PhoneMailValidationPipe()) body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { id, full_name, email, phone, gender } = body;
    let birth_day = body.birth_day;
    if (birth_day) {
      birth_day = new Date(birth_day);
    }
    const result = await this.authService.updateUser(
      id,
      full_name,
      email,
      gender,
      phone,
      birth_day,
    );
    return result;
  }

  @Post('/adduser')
  // @Roles('root')
  // @UseGuards(JwtAuthGuard, RoleGuard)
  async CreateUser(
    @Req() req,
    @Body(new PhoneMailValidationPipe()) body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user_name, pwd, full_name, email, phone, gender } = body;
    let birth_day = body.birth_day;
    if (birth_day) {
      birth_day = new Date(birth_day);
    }
    const result = await this.authService.addNew(
      user_name,
      pwd,
      full_name,
      gender,
      phone,
      email,
      birth_day,
    );
    return result;
  }

  @Post('delete/:id')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async DeleteOne(
    @Param() param,
    @Req() req,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.deleteOne(param.id);
  }

  @Post('/reset_userpassword')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async resetPwd(@Req() req, @Res({ passthrough: true }) res: Response) {
    const { id, new_password } = req.body;
    return await this.authService.resetUserPwd(id, new_password);
  }

  @Get('user/:id')
  @Roles('root')
  @UseGuards(JwtAuthGuard, RoleGuard)
  async GetInfor(@Param() param, @Res({ passthrough: true }) res: Response) {
    return await this.authService.getInfor(param.id);
  }

  @Get('privilege')
  @UseGuards(JwtAuthGuard)
  async GetPrivilege(
    @Req() req,
    @Body(new PhoneMailValidationPipe()) body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.getPrivilege(req.user._id);
  }

  @Get('allrole')
  @UseGuards(JwtAuthGuard)
  async GetAllRole(
    @Req() req,
    @Body(new PhoneMailValidationPipe()) body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    return await this.authService.getAllRole();
  }
}
