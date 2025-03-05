import { Module } from '@nestjs/common';
import { CampaignUefaEuroSubscriberHistorieService } from './campaign-uefa-euro-subscriber-historie.service';
import { CampaignUefaEuroSubscriberHistorieResolver } from './campaign-uefa-euro-subscriber-historie.resolver';

@Module({
  providers: [CampaignUefaEuroSubscriberHistorieResolver, CampaignUefaEuroSubscriberHistorieService],
})
export class CampaignUefaEuroSubscriberHistorieModule {}
