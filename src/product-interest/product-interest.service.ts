import { Injectable } from '@nestjs/common';
import { CreateProductInterestDto } from './dto/create-product-interest.dto';
import { UpdateProductInterestDto } from './dto/update-product-interest.dto';

@Injectable()
export class ProductInterestService {
  create(createProductInterestDto: CreateProductInterestDto) {
    return 'This action adds a new productInterest';
  }

  findAll() {
    return `This action returns all productInterest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productInterest`;
  }

  update(id: number, updateProductInterestDto: UpdateProductInterestDto) {
    return `This action updates a #${id} productInterest`;
  }

  remove(id: number) {
    return `This action removes a #${id} productInterest`;
  }
}
