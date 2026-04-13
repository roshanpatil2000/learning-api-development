import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggerInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const { method, originalUrl, body } = request;

    const startTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - startTime;

        this.logger.log(
          `${method} ${originalUrl} ${responseTime}ms`,
        );

        // Optional: log request body
        // this.logger.debug(`Body: ${JSON.stringify(body)}`);
      }),
    );
  }
}