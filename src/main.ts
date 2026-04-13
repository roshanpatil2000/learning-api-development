import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.useGlobalInterceptors(new LoggerInterceptor());
  
  await app.listen(process.env.PORT || 3000);

  Logger.log(`\n\nServer is running on http://localhost:${process.env.PORT || 3000}\n\n`);
}
bootstrap();
