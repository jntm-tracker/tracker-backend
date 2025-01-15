import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LogService {
  private readonly logger = new Logger(LogService.name);
  createUserActionLog(data) {
    this.logger.log(data);
  }
}
