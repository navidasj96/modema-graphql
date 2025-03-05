import { Module } from '@nestjs/common';
import { AutomationRfmScoreService } from './automation-rfm-score.service';
import { AutomationRfmScoreResolver } from './automation-rfm-score.resolver';

@Module({
  providers: [AutomationRfmScoreResolver, AutomationRfmScoreService],
})
export class AutomationRfmScoreModule {}
