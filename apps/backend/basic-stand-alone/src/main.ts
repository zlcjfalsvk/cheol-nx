/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { AppService } from './app/app.service';

async function bootstrap() {
  Logger.log(`🚀  StandAlone start`);
  const app = await NestFactory.createApplicationContext(AppModule);

  const appModule = app.select(AppModule).get(AppService, { strict: true });
  console.log(appModule.getData());
  await app.close();
}

bootstrap();
