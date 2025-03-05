import { Module } from '@nestjs/common';
import { CampaignFreeOfferService } from './campaign-free-offer.service';
import { CampaignFreeOfferResolver } from './campaign-free-offer.resolver';

@Module({
  providers: [CampaignFreeOfferResolver, CampaignFreeOfferService],
})
export class CampaignFreeOfferModule {}
