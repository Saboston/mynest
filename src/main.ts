import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const options = new DocumentBuilder()   //swagger
  .setTitle('nest项目/api文档')
  .setDescription('api文档')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors();   //跨域
  await app.listen(3003);
}
bootstrap();
