import { Module } from '@nestjs/common';
import { InvoiceBankGatewayHistoryService } from './invoice-bank-gateway-history.service';
import { InvoiceBankGatewayHistoryResolver } from './invoice-bank-gateway-history.resolver';

@Module({
  providers: [InvoiceBankGatewayHistoryResolver, InvoiceBankGatewayHistoryService],
})
export class InvoiceBankGatewayHistoryModule {}
