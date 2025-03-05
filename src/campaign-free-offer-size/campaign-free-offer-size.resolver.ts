import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaignFreeOfferSizeService } from './campaign-free-offer-size.service';
import { CampaignFreeOfferSize } from './entities/campaign-free-offer-size.entity';
import { CreateCampaignFreeOfferSizeInput } from './dto/create-campaign-free-offer-size.input';
import { UpdateCampaignFreeOfferSizeInput } from './dto/update-campaign-free-offer-size.input';

@Resolver(() => CampaignFreeOfferSize)
export class CampaignFreeOfferSizeResolver {
  constructor(private readonly campaignFreeOfferSizeService: CampaignFreeOfferSizeService) {}

  @Mutation(() => CampaignFreeOfferSize)
  createCampaignFreeOfferSize(@Args('createCampaignFreeOfferSizeInput') createCampaignFreeOfferSizeInput: CreateCampaignFreeOfferSizeInput) {
    return this.campaignFreeOfferSizeService.create(createCampaignFreeOfferSizeInput);
  }

  @Query(() => [CampaignFreeOfferSize], { name: 'campaignFreeOfferSize' })
  findAll() {
    return this.campaignFreeOfferSizeService.findAll();
  }

  @Query(() => CampaignFreeOfferSize, { name: 'campaignFreeOfferSize' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignFreeOfferSizeService.findOne(id);
  }

  @Mutation(() => CampaignFreeOfferSize)
  updateCampaignFreeOfferSize(@Args('updateCampaignFreeOfferSizeInput') updateCampaignFreeOfferSizeInput: UpdateCampaignFreeOfferSizeInput) {
    return this.campaignFreeOfferSizeService.update(updateCampaignFreeOfferSizeInput.id, updateCampaignFreeOfferSizeInput);
  }

  @Mutation(() => CampaignFreeOfferSize)
  removeCampaignFreeOfferSize(@Args('id', { type: () => Int }) id: number) {
    return this.campaignFreeOfferSizeService.remove(id);
  }
}
