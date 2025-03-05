import { Module } from '@nestjs/common';
import { FedexAddressValidationAttributeService } from './fedex-address-validation-attribute.service';
import { FedexAddressValidationAttributeResolver } from './fedex-address-validation-attribute.resolver';

@Module({
  providers: [FedexAddressValidationAttributeResolver, FedexAddressValidationAttributeService],
})
export class FedexAddressValidationAttributeModule {}
