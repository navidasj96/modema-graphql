import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberHistorieService } from './campaign-uefa-euro-subscriber-historie.service';
import { CampaignUefaEuroSubscriberHistorie } from './entities/campaign-uefa-euro-subscriber-historie.entity';
import { CreateCampaignUefaEuroSubscriberHistorieInput } from './dto/create-campaign-uefa-euro-subscriber-historie.input';
import { UpdateCampaignUefaEuroSubscriberHistorieInput } from './dto/update-campaign-uefa-euro-subscriber-historie.input';

@Resolver(() => CampaignUefaEuroSubscriberHistorie)
export class CampaignUefaEuroSubscriberHistorieResolver {
  constructor(private readonly campaignUefaEuroSubscriberHistorieService: CampaignUefaEuroSubscriberHistorieService) {}

  @Mutation(() => CampaignUefaEuroSubscriberHistorie)
  createCampaignUefaEuroSubscriberHistorie(@Args('createCampaignUefaEuroSubscriberHistorieInput') createCampaignUefaEuroSubscriberHistorieInput: CreateCampaignUefaEuroSubscriberHistorieInput) {
    return this.campaignUefaEuroSubscriberHistorieService.create(createCampaignUefaEuroSubscriberHistorieInput);
  }

  @Query(() => [CampaignUefaEuroSubscriberHistorie], { name: 'campaignUefaEuroSubscriberHistorie' })
  findAll() {
    return this.campaignUefaEuroSubscriberHistorieService.findAll();
  }

  @Query(() => CampaignUefaEuroSubscriberHistorie, { name: 'campaignUefaEuroSubscriberHistorie' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignUefaEuroSubscriberHistorieService.findOne(id);
  }

  @Mutation(() => CampaignUefaEuroSubscriberHistorie)
  updateCampaignUefaEuroSubscriberHistorie(@Args('updateCampaignUefaEuroSubscriberHistorieInput') updateCampaignUefaEuroSubscriberHistorieInput: UpdateCampaignUefaEuroSubscriberHistorieInput) {
    return this.campaignUefaEuroSubscriberHistorieService.update(updateCampaignUefaEuroSubscriberHistorieInput.id, updateCampaignUefaEuroSubscriberHistorieInput);
  }

  @Mutation(() => CampaignUefaEuroSubscriberHistorie)
  removeCampaignUefaEuroSubscriberHistorie(@Args('id', { type: () => Int }) id: number) {
    return this.campaignUefaEuroSubscriberHistorieService.remove(id);
  }
}
