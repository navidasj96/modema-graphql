import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaignGoldCoinSubService } from './campaign-gold-coin-sub.service';
import { CampaignGoldCoinSub } from './entities/campaign-gold-coin-sub.entity';
import { CreateCampaignGoldCoinSubInput } from './dto/create-campaign-gold-coin-sub.input';
import { UpdateCampaignGoldCoinSubInput } from './dto/update-campaign-gold-coin-sub.input';

@Resolver(() => CampaignGoldCoinSub)
export class CampaignGoldCoinSubResolver {
  constructor(private readonly campaignGoldCoinSubService: CampaignGoldCoinSubService) {}

  @Mutation(() => CampaignGoldCoinSub)
  createCampaignGoldCoinSub(@Args('createCampaignGoldCoinSubInput') createCampaignGoldCoinSubInput: CreateCampaignGoldCoinSubInput) {
    return this.campaignGoldCoinSubService.create(createCampaignGoldCoinSubInput);
  }

  @Query(() => [CampaignGoldCoinSub], { name: 'campaignGoldCoinSub' })
  findAll() {
    return this.campaignGoldCoinSubService.findAll();
  }

  @Query(() => CampaignGoldCoinSub, { name: 'campaignGoldCoinSub' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignGoldCoinSubService.findOne(id);
  }

  @Mutation(() => CampaignGoldCoinSub)
  updateCampaignGoldCoinSub(@Args('updateCampaignGoldCoinSubInput') updateCampaignGoldCoinSubInput: UpdateCampaignGoldCoinSubInput) {
    return this.campaignGoldCoinSubService.update(updateCampaignGoldCoinSubInput.id, updateCampaignGoldCoinSubInput);
  }

  @Mutation(() => CampaignGoldCoinSub)
  removeCampaignGoldCoinSub(@Args('id', { type: () => Int }) id: number) {
    return this.campaignGoldCoinSubService.remove(id);
  }
}
