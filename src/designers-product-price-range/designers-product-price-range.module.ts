import { Module } from '@nestjs/common';
import { DesignersProductPriceRangeService } from './designers-product-price-range.service';
import { DesignersProductPriceRangeResolver } from './designers-product-price-range.resolver';

@Module({
  providers: [DesignersProductPriceRangeResolver, DesignersProductPriceRangeService],
})
export class DesignersProductPriceRangeModule {}
