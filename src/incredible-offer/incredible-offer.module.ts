import { Module } from '@nestjs/common';
import { IncredibleOfferService } from './incredible-offer.service';
import { IncredibleOfferResolver } from './incredible-offer.resolver';

@Module({
  providers: [IncredibleOfferResolver, IncredibleOfferService],
})
export class IncredibleOfferModule {}
