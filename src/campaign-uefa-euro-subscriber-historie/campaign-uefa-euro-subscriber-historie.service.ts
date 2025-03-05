import { Injectable } from '@nestjs/common';
import { CreateCampaignUefaEuroSubscriberHistorieInput } from './dto/create-campaign-uefa-euro-subscriber-historie.input';
import { UpdateCampaignUefaEuroSubscriberHistorieInput } from './dto/update-campaign-uefa-euro-subscriber-historie.input';

@Injectable()
export class CampaignUefaEuroSubscriberHistorieService {
  create(createCampaignUefaEuroSubscriberHistorieInput: CreateCampaignUefaEuroSubscriberHistorieInput) {
    return 'This action adds a new campaignUefaEuroSubscriberHistorie';
  }

  findAll() {
    return `This action returns all campaignUefaEuroSubscriberHistorie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} campaignUefaEuroSubscriberHistorie`;
  }

  update(id: number, updateCampaignUefaEuroSubscriberHistorieInput: UpdateCampaignUefaEuroSubscriberHistorieInput) {
    return `This action updates a #${id} campaignUefaEuroSubscriberHistorie`;
  }

  remove(id: number) {
    return `This action removes a #${id} campaignUefaEuroSubscriberHistorie`;
  }
}
