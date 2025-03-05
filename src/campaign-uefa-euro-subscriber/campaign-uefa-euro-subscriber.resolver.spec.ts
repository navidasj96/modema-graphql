import { Test, TestingModule } from '@nestjs/testing';
import { CampaignUefaEuroSubscriberResolver } from './campaign-uefa-euro-subscriber.resolver';
import { CampaignUefaEuroSubscriberService } from './campaign-uefa-euro-subscriber.service';

describe('CampaignUefaEuroSubscriberResolver', () => {
  let resolver: CampaignUefaEuroSubscriberResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignUefaEuroSubscriberResolver, CampaignUefaEuroSubscriberService],
    }).compile();

    resolver = module.get<CampaignUefaEuroSubscriberResolver>(CampaignUefaEuroSubscriberResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
