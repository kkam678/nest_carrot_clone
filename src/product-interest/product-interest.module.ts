import { Module } from '@nestjs/common';
import { ProductInterestService } from './product-interest.service';
import { ProductInterestController } from './product-interest.controller';

@Module({
    controllers: [ProductInterestController],
    providers: [ProductInterestService],
})
export class ProductInterestModule {}
