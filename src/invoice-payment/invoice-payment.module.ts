import { Module } from '@nestjs/common';
import { InvoicePaymentService } from './invoice-payment.service';
import { InvoicePaymentResolver } from './invoice-payment.resolver';

@Module({
  providers: [InvoicePaymentResolver, InvoicePaymentService],
})
export class InvoicePaymentModule {}
