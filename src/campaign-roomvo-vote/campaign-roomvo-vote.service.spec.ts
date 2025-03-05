import { Test, TestingModule } from '@nestjs/testing';
import { CampaignRoomvoVoteService } from './campaign-roomvo-vote.service';

describe('CampaignRoomvoVoteService', () => {
  let service: CampaignRoomvoVoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignRoomvoVoteService],
    }).compile();

    service = module.get<CampaignRoomvoVoteService>(CampaignRoomvoVoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
