import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Learning API')
    .setDescription('The API Development Learning with NestJS')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, documentFactory);

  await app.listen(process.env.PORT || 3000);
  Logger.log('\n');
  Logger.log(
    `Server is running on http://localhost:${process.env.PORT || 3000}\n`,
  );
  Logger.log(
    `API documentation is available on http://localhost:${process.env.PORT || 3000}/api-doc\n`,
  );
}
bootstrap();
