import { Injectable, NestMiddleware, Logger } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger(LoggerMiddleware.name);
  use(request: any, res: any, next: () => void) {
    if (request.url && request.url !== '/') {
      this.logger.log(`Visiting ${request.method} : ${request.url}`);
    }
    next();
  }
}
