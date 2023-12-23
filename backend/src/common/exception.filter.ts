import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { LoggerService } from './custom.logger';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new LoggerService();
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    console.log('exception ', exception);

    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    // Create response
    let msg =
      exception instanceof HttpException
        ? exception.message
        : 'Internal server error';

    if (exception instanceof HttpException) {
      const res = exception.getResponse() as Response;
      if (res !== null && res instanceof Object) {
        const objJson1 = JSON.parse(JSON.stringify(res));
        msg = objJson1['message'];
      }
    }

    const responseBody = {
      statusCode: httpStatus,
      message: msg,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
    };

    // Write log
    this.logger.log(msg);

    // Respose to client
    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
