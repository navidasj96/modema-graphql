import { Module } from '@nestjs/common';
import { InvoiceAddressService } from './invoice-address.service';
import { InvoiceAddressResolver } from './invoice-address.resolver';

@Module({
  providers: [InvoiceAddressResolver, InvoiceAddressService],
})
export class InvoiceAddressModule {}
