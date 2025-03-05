import { Test, TestingModule } from '@nestjs/testing';
import { CampaignVotingImageResolver } from './campaign-voting-image.resolver';
import { CampaignVotingImageService } from './campaign-voting-image.service';

describe('CampaignVotingImageResolver', () => {
  let resolver: CampaignVotingImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignVotingImageResolver, CampaignVotingImageService],
    }).compile();

    resolver = module.get<CampaignVotingImageResolver>(CampaignVotingImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
