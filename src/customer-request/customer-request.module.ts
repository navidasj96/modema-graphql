import { Module } from '@nestjs/common';
import { CustomerRequestService } from './customer-request.service';
import { CustomerRequestResolver } from './customer-request.resolver';

@Module({
  providers: [CustomerRequestResolver, CustomerRequestService],
})
export class CustomerRequestModule {}
