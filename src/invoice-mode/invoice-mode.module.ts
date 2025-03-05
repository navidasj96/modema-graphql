import { Module } from '@nestjs/common';
import { InvoiceModeService } from './invoice-mode.service';
import { InvoiceModeResolver } from './invoice-mode.resolver';

@Module({
  providers: [InvoiceModeResolver, InvoiceModeService],
})
export class InvoiceModeModule {}
