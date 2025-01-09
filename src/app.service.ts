import { Injectable } from '@nestjs/common';
import { getCurrentTime, getEnvVars } from '@/utils';
@Injectable()
export class AppService {
  getHello(): string {
    const now = getCurrentTime();
    const env = getEnvVars().NODE_ENV;
    return `${env}-${now}`;
  }
}
