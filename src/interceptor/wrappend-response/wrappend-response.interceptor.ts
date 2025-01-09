import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getCurrentTime } from '@/utils';

@Injectable()
export class WrappendResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data: data,
          code: 200,
          success: true,
          message: '请求成功',
          timestamp: getCurrentTime(),
        };
      }),
    );
  }
}
