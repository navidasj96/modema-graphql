import { Module } from '@nestjs/common';
import { InvoiceNegotiationService } from './invoice-negotiation.service';
import { InvoiceNegotiationResolver } from './invoice-negotiation.resolver';

@Module({
  providers: [InvoiceNegotiationResolver, InvoiceNegotiationService],
})
export class InvoiceNegotiationModule {}
