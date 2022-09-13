import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import path from 'path';
import { ValidationPipe } from './validation.pipe';
import { TransformInterceptor } from './transform.interceptor';
import { ClassSerializerInterceptor } from '@nestjs/common';

// dotenv.config({
//     path: '.env',
// });

async function bootstrap() {
    console.log(__dirname);
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(
        new TransformInterceptor(),
        new ClassSerializerInterceptor(app.get(Reflector)),
    );
    await app.listen(3000);
}
bootstrap();
