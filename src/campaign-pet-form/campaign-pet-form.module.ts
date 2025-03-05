import { Module } from '@nestjs/common';
import { CampaignPetFormService } from './campaign-pet-form.service';
import { CampaignPetFormResolver } from './campaign-pet-form.resolver';

@Module({
  providers: [CampaignPetFormResolver, CampaignPetFormService],
})
export class CampaignPetFormModule {}
