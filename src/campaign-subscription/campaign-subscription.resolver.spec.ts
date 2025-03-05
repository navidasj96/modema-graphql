import { Test, TestingModule } from '@nestjs/testing';
import { CampaignSubscriptionResolver } from './campaign-subscription.resolver';
import { CampaignSubscriptionService } from './campaign-subscription.service';

describe('CampaignSubscriptionResolver', () => {
  let resolver: CampaignSubscriptionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignSubscriptionResolver, CampaignSubscriptionService],
    }).compile();

    resolver = module.get<CampaignSubscriptionResolver>(CampaignSubscriptionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
