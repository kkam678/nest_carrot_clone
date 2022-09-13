import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductInterestService } from './product-interest.service';
import { CreateProductInterestDto } from './dto/create-product-interest.dto';
import { UpdateProductInterestDto } from './dto/update-product-interest.dto';

@Controller('product-interest')
export class ProductInterestController {
  constructor(private readonly productInterestService: ProductInterestService) {}

  @Post()
  create(@Body() createProductInterestDto: CreateProductInterestDto) {
    return this.productInterestService.create(createProductInterestDto);
  }

  @Get()
  findAll() {
    return this.productInterestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productInterestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductInterestDto: UpdateProductInterestDto) {
    return this.productInterestService.update(+id, updateProductInterestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productInterestService.remove(+id);
  }
}
