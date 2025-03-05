import { Module } from '@nestjs/common';
import { InvoiceAddressValidationResultService } from './invoice-address-validation-result.service';
import { InvoiceAddressValidationResultResolver } from './invoice-address-validation-result.resolver';

@Module({
  providers: [InvoiceAddressValidationResultResolver, InvoiceAddressValidationResultService],
})
export class InvoiceAddressValidationResultModule {}
