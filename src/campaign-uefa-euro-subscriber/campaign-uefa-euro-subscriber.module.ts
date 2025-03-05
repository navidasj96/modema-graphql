import { Module } from '@nestjs/common';
import { CampaignUefaEuroSubscriberService } from './campaign-uefa-euro-subscriber.service';
import { CampaignUefaEuroSubscriberResolver } from './campaign-uefa-euro-subscriber.resolver';

@Module({
  providers: [CampaignUefaEuroSubscriberResolver, CampaignUefaEuroSubscriberService],
})
export class CampaignUefaEuroSubscriberModule {}
