import { Module } from '@nestjs/common';
import { CampaignInstagramFollowService } from './campaign-instagram-follow.service';
import { CampaignInstagramFollowResolver } from './campaign-instagram-follow.resolver';

@Module({
  providers: [CampaignInstagramFollowResolver, CampaignInstagramFollowService],
})
export class CampaignInstagramFollowModule {}
