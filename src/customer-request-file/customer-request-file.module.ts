import { Module } from '@nestjs/common';
import { CustomerRequestFileService } from './customer-request-file.service';
import { CustomerRequestFileResolver } from './customer-request-file.resolver';

@Module({
  providers: [CustomerRequestFileResolver, CustomerRequestFileService],
})
export class CustomerRequestFileModule {}
