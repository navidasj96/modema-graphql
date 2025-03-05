import { Module } from '@nestjs/common';
import { InvoiceProductService } from './invoice-product.service';
import { InvoiceProductResolver } from './invoice-product.resolver';

@Module({
  providers: [InvoiceProductResolver, InvoiceProductService],
})
export class InvoiceProductModule {}
