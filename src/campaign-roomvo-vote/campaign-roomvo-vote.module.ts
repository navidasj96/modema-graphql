import { Module } from '@nestjs/common';
import { CampaignRoomvoVoteService } from './campaign-roomvo-vote.service';
import { CampaignRoomvoVoteResolver } from './campaign-roomvo-vote.resolver';

@Module({
  providers: [CampaignRoomvoVoteResolver, CampaignRoomvoVoteService],
})
export class CampaignRoomvoVoteModule {}
