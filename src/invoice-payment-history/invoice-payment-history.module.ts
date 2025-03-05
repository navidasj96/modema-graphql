import { Module } from '@nestjs/common';
import { InvoicePaymentHistoryService } from './invoice-payment-history.service';
import { InvoicePaymentHistoryResolver } from './invoice-payment-history.resolver';

@Module({
  providers: [InvoicePaymentHistoryResolver, InvoicePaymentHistoryService],
})
export class InvoicePaymentHistoryModule {}
