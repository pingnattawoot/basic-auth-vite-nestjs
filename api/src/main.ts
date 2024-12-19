import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Your React app URL
    credentials: true,
  });

  // Add global prefix
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
