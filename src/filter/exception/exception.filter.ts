import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Response } from 'express';
import { getCurrentTime } from '@/utils';
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);
  catch(exception: any, host: ArgumentsHost) {
    const error: Record<string, any> | 'string' | any =
      exception || 'Internal Server Error';
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const commonError = {
      success: false,
      timestamp: getCurrentTime(),
    };
    let formatError;
    if (
      error instanceof Object &&
      [
        'BusinessException',
        'BadRequestException',
        'NotFoundException',
        'ValidateException',
        'UnauthorizedException',
      ]?.includes(error?.name)
    ) {
      this.logger.error(error?.response?.message);
      formatError = {
        message: error?.response?.message,
        ...commonError,
      };
      response.header('Content-Type', 'application/json; charset=utf-8');
      response.status(error?.status).json(formatError);
      return response;
    } else {
      this.logger.error(error?.message);
      formatError = {
        message: error?.message,
        ...commonError,
      };
    }
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.status(500).json(formatError);
    return response;
  }
}
