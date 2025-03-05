import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CampaignRoomvoVoteService } from './campaign-roomvo-vote.service';
import { CampaignRoomvoVote } from './entities/campaign-roomvo-vote.entity';
import { CreateCampaignRoomvoVoteInput } from './dto/create-campaign-roomvo-vote.input';
import { UpdateCampaignRoomvoVoteInput } from './dto/update-campaign-roomvo-vote.input';

@Resolver(() => CampaignRoomvoVote)
export class CampaignRoomvoVoteResolver {
  constructor(private readonly campaignRoomvoVoteService: CampaignRoomvoVoteService) {}

  @Mutation(() => CampaignRoomvoVote)
  createCampaignRoomvoVote(@Args('createCampaignRoomvoVoteInput') createCampaignRoomvoVoteInput: CreateCampaignRoomvoVoteInput) {
    return this.campaignRoomvoVoteService.create(createCampaignRoomvoVoteInput);
  }

  @Query(() => [CampaignRoomvoVote], { name: 'campaignRoomvoVote' })
  findAll() {
    return this.campaignRoomvoVoteService.findAll();
  }

  @Query(() => CampaignRoomvoVote, { name: 'campaignRoomvoVote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.campaignRoomvoVoteService.findOne(id);
  }

  @Mutation(() => CampaignRoomvoVote)
  updateCampaignRoomvoVote(@Args('updateCampaignRoomvoVoteInput') updateCampaignRoomvoVoteInput: UpdateCampaignRoomvoVoteInput) {
    return this.campaignRoomvoVoteService.update(updateCampaignRoomvoVoteInput.id, updateCampaignRoomvoVoteInput);
  }

  @Mutation(() => CampaignRoomvoVote)
  removeCampaignRoomvoVote(@Args('id', { type: () => Int }) id: number) {
    return this.campaignRoomvoVoteService.remove(id);
  }
}
