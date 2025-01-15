import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { getEnvVars } from './utils';

async function bootstrap() {
  const env = getEnvVars().NODE_ENV;
  const app = await NestFactory.create(AppModule);

  if (env === 'local') {
    dotenv.config({ path: `.env.local` });
    // 启用 CORS 并配置允许的源
    app.enableCors({
      origin: 'http://localhost:3333',
      methods: 'GET, POST, PUT, DELETE',
    });
  }
  if (env !== 'prod') {
    const options = new DocumentBuilder()
      .setTitle('Tracker Swagger')
      .setDescription('The Tracker API description')
      .setVersion('1.0')
      .addTag('Tracker')
      .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT', // 可选项
        name: 'Authorization',
        in: 'header',
      })
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(process.env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
