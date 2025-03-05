import { Test, TestingModule } from '@nestjs/testing';
import { CampaignFreeOfferResolver } from './campaign-free-offer.resolver';
import { CampaignFreeOfferService } from './campaign-free-offer.service';

describe('CampaignFreeOfferResolver', () => {
  let resolver: CampaignFreeOfferResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignFreeOfferResolver, CampaignFreeOfferService],
    }).compile();

    resolver = module.get<CampaignFreeOfferResolver>(CampaignFreeOfferResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
