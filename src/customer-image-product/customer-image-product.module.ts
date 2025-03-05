import { Module } from '@nestjs/common';
import { CustomerImageProductService } from './customer-image-product.service';
import { CustomerImageProductResolver } from './customer-image-product.resolver';

@Module({
  providers: [CustomerImageProductResolver, CustomerImageProductService],
})
export class CustomerImageProductModule {}
