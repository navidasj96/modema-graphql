import { Test, TestingModule } from '@nestjs/testing';
import { CampaignSubscriptionService } from './campaign-subscription.service';

describe('CampaignSubscriptionService', () => {
  let service: CampaignSubscriptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignSubscriptionService],
    }).compile();

    service = module.get<CampaignSubscriptionService>(CampaignSubscriptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
