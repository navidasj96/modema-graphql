import { Module } from '@nestjs/common';
import { InvoicePaymentTypeService } from './invoice-payment-type.service';
import { InvoicePaymentTypeResolver } from './invoice-payment-type.resolver';

@Module({
  providers: [InvoicePaymentTypeResolver, InvoicePaymentTypeService],
})
export class InvoicePaymentTypeModule {}
