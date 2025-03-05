import { Module } from '@nestjs/common';
import { InvoiceHistoryService } from './invoice-history.service';
import { InvoiceHistoryResolver } from './invoice-history.resolver';

@Module({
  providers: [InvoiceHistoryResolver, InvoiceHistoryService],
})
export class InvoiceHistoryModule {}
