import { Module } from '@nestjs/common';
import { CustomerVideoProductService } from './customer-video-product.service';
import { CustomerVideoProductResolver } from './customer-video-product.resolver';

@Module({
  providers: [CustomerVideoProductResolver, CustomerVideoProductService],
})
export class CustomerVideoProductModule {}
