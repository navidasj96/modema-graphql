import { Module } from '@nestjs/common';
import { CarpetUsagePlaceInvoiceProductService } from './carpet-usage-place-invoice-product.service';
import { CarpetUsagePlaceInvoiceProductResolver } from './carpet-usage-place-invoice-product.resolver';

@Module({
  providers: [CarpetUsagePlaceInvoiceProductResolver, CarpetUsagePlaceInvoiceProductService],
})
export class CarpetUsagePlaceInvoiceProductModule {}
