import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://dev.booruledie.com',
      'https://booruledie.com',
    ],
  });
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`App started at port ${port}`);
}
bootstrap().catch((err) => {
  // Optionally log the error or handle it as needed
  console.error('Error during bootstrap:', err);
});
