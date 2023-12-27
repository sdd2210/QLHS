import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
export declare class GlobalExceptionFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    private readonly logger;
    constructor(httpAdapterHost: HttpAdapterHost);
    catch(exception: unknown, host: ArgumentsHost): void;
}
