import { Module } from '@nestjs/common';
import { InvoiceInvoiceStatusService } from './invoice-invoice-status.service';
import { InvoiceInvoiceStatusResolver } from './invoice-invoice-status.resolver';

@Module({
  providers: [InvoiceInvoiceStatusResolver, InvoiceInvoiceStatusService],
})
export class InvoiceInvoiceStatusModule {}
