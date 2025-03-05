import { Module } from '@nestjs/common';
import { CampaignSubscriptionService } from './campaign-subscription.service';
import { CampaignSubscriptionResolver } from './campaign-subscription.resolver';

@Module({
  providers: [CampaignSubscriptionResolver, CampaignSubscriptionService],
})
export class CampaignSubscriptionModule {}
