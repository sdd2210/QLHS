/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    return super.canActivate(context);
  }

  //   handleRequest(err, user, info) {
  //     // You can throw an exception based on either "info" or "err" arguments
  //     if (err || !user) {
  //       throw err || new UnauthorizedException();
  //     }
  //     return user;
  //   }
}
