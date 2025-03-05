import { Module } from '@nestjs/common';
import { CampaignVotingImageService } from './campaign-voting-image.service';
import { CampaignVotingImageResolver } from './campaign-voting-image.resolver';

@Module({
  providers: [CampaignVotingImageResolver, CampaignVotingImageService],
})
export class CampaignVotingImageModule {}
