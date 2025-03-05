import { Module } from '@nestjs/common';
import { InvoicePaymentStatusService } from './invoice-payment-status.service';
import { InvoicePaymentStatusResolver } from './invoice-payment-status.resolver';

@Module({
  providers: [InvoicePaymentStatusResolver, InvoicePaymentStatusService],
})
export class InvoicePaymentStatusModule {}
