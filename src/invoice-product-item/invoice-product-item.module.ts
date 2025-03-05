import { Module } from '@nestjs/common';
import { InvoiceProductItemService } from './invoice-product-item.service';
import { InvoiceProductItemResolver } from './invoice-product-item.resolver';

@Module({
  providers: [InvoiceProductItemResolver, InvoiceProductItemService],
})
export class InvoiceProductItemModule {}
