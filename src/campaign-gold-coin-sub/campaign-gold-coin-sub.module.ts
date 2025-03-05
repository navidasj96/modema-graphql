import { Module } from '@nestjs/common';
import { CampaignGoldCoinSubService } from './campaign-gold-coin-sub.service';
import { CampaignGoldCoinSubResolver } from './campaign-gold-coin-sub.resolver';

@Module({
  providers: [CampaignGoldCoinSubResolver, CampaignGoldCoinSubService],
})
export class CampaignGoldCoinSubModule {}
