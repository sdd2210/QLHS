import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export class AppController {
  sendResponseError(res: Response, message: string) {
    const result = {
      success: false,
      message: message,
    };

    return res.status(HttpStatus.BAD_REQUEST).send(result);
  }

  sendResponseForbidden(res: Response, message: string) {
    const result = {
      success: false,
      message: message,
      status: HttpStatus.FORBIDDEN,
    };

    return res.status(HttpStatus.FORBIDDEN).send(result);
  }

  sendResponse(res: Response, message: string, data: any) {
    const result = {
      success: true,
      message: message,
      data: data,
    };
    return res.status(HttpStatus.OK).send(result);
  }
}
