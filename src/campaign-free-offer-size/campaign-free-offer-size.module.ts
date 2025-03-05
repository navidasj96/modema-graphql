import { Module } from '@nestjs/common';
import { CampaignFreeOfferSizeService } from './campaign-free-offer-size.service';
import { CampaignFreeOfferSizeResolver } from './campaign-free-offer-size.resolver';

@Module({
  providers: [CampaignFreeOfferSizeResolver, CampaignFreeOfferSizeService],
})
export class CampaignFreeOfferSizeModule {}
