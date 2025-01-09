import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Buffer } from 'buffer';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  private readonly logger = new Logger(AuthInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    let requestBody = request?.body;
    const headerAuthorization = request?.headers?.authorization;
    if (request.headers['content-type']?.includes('text/plain')) {
      const jsonBody = JSON.parse(request.body);
      requestBody = jsonBody;
    }
    this.logger.log(requestBody);
    const bodyAuthorization = requestBody?.authorization;

    const authorization = headerAuthorization || bodyAuthorization;
    if (!authorization) {
      throw new UnauthorizedException('未授权');
    }
    const infos: string[] = authorization.split('.');
    const payload = infos?.[1];
    const decodedPayload = Buffer.from(payload, 'base64url').toString('utf-8');
    const userInfo: {
      id: number;
      username?: string;
      mobile?: string;
    } = JSON.parse(decodedPayload);
    this.logger.log('用户信息', userInfo);
    if (!userInfo?.id) {
      throw new UnauthorizedException('未授权');
    }
    request.headers = {
      ...request.headers,
      user: userInfo,
    };
    request.body = requestBody;
    return next.handle();
  }
}
