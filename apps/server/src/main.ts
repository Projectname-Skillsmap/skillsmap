import { NestFactory } from '@nestjs/core';
import { AppModule } from './assets/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
