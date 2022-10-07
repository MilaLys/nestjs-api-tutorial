import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('MEMO')
    .setDescription('MEMO API description')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  );

  await app.listen(config.get('API_PORT'));

  return config.get('API_PORT');
}

bootstrap()
  .then(port => console.info(`The SERVER is listening on port ${port}.`))
  .catch(error => console.error('OMG...Keep calm but something went wrong =)', error));
