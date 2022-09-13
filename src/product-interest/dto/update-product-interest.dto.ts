import { PartialType } from '@nestjs/mapped-types';
import { CreateProductInterestDto } from './create-product-interest.dto';

export class UpdateProductInterestDto extends PartialType(CreateProductInterestDto) {}
