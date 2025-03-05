import { Test, TestingModule } from '@nestjs/testing';
import { CampaignVotingImageService } from './campaign-voting-image.service';

describe('CampaignVotingImageService', () => {
  let service: CampaignVotingImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignVotingImageService],
    }).compile();

    service = module.get<CampaignVotingImageService>(CampaignVotingImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
