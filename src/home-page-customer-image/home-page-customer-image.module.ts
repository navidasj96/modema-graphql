import { Module } from '@nestjs/common';
import { HomePageCustomerImageService } from './home-page-customer-image.service';
import { HomePageCustomerImageResolver } from './home-page-customer-image.resolver';

@Module({
  providers: [HomePageCustomerImageResolver, HomePageCustomerImageService],
})
export class HomePageCustomerImageModule {}
