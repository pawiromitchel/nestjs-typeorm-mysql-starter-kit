import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable response body compression for better performance
  app.use(compression());
  // security layer (https://github.com/helmetjs/helmet#how-it-works)
  app.use(helmet());
  // enable cross domain requests
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
