import { Module } from '@nestjs/common';
import { CampaignRoomvoImageService } from './campaign-roomvo-image.service';
import { CampaignRoomvoImageResolver } from './campaign-roomvo-image.resolver';

@Module({
  providers: [CampaignRoomvoImageResolver, CampaignRoomvoImageService],
})
export class CampaignRoomvoImageModule {}
