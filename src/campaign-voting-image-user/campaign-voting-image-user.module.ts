import { Module } from '@nestjs/common';
import { CampaignVotingImageUserService } from './campaign-voting-image-user.service';
import { CampaignVotingImageUserResolver } from './campaign-voting-image-user.resolver';

@Module({
  providers: [CampaignVotingImageUserResolver, CampaignVotingImageUserService],
})
export class CampaignVotingImageUserModule {}
