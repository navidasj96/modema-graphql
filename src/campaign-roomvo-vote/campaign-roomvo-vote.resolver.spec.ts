import { Test, TestingModule } from '@nestjs/testing';
import { CampaignRoomvoVoteResolver } from './campaign-roomvo-vote.resolver';
import { CampaignRoomvoVoteService } from './campaign-roomvo-vote.service';

describe('CampaignRoomvoVoteResolver', () => {
  let resolver: CampaignRoomvoVoteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignRoomvoVoteResolver, CampaignRoomvoVoteService],
    }).compile();

    resolver = module.get<CampaignRoomvoVoteResolver>(CampaignRoomvoVoteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
