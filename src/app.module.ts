import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TownModule } from './town/town.module';
import { ProductInterestModule } from './product-interest/product-interest.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { BidModule } from './bid/bid.module';
import { VodModule } from './vod/vod.module';
import dbConfig from './config/dbConfig';
import authConfig from './config/authConfig';

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            envFilePath: '.env',
            load: [dbConfig, authConfig],
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST, //'localhost',
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER, //'root',
            password: process.env.DB_PASSWORD, //'test',
            database: process.env.DB_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: Boolean(process.env.DB_SYNCHRONIZE), // true,
            autoLoadEntities: true,
            logging: ['query', 'error'],
        }),
        AuthModule,
        ProductModule,
        VodModule,
        BidModule,
        ProductCategoryModule,
        ProductInterestModule,
        TownModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
