import { Module } from '@nestjs/common';
import { AttributeProductService } from './attribute-product.service';
import { AttributeProductResolver } from './attribute-product.resolver';

@Module({
  providers: [AttributeProductResolver, AttributeProductService],
})
export class AttributeProductModule {}
