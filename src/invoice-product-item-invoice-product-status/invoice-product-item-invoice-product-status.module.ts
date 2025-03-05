import { Module } from '@nestjs/common';
import { InvoiceProductItemInvoiceProductStatusService } from './invoice-product-item-invoice-product-status.service';
import { InvoiceProductItemInvoiceProductStatusResolver } from './invoice-product-item-invoice-product-status.resolver';

@Module({
  providers: [InvoiceProductItemInvoiceProductStatusResolver, InvoiceProductItemInvoiceProductStatusService],
})
export class InvoiceProductItemInvoiceProductStatusModule {}
