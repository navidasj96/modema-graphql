import { Test, TestingModule } from '@nestjs/testing';
import { CampaignFreeOfferSizeResolver } from './campaign-free-offer-size.resolver';
import { CampaignFreeOfferSizeService } from './campaign-free-offer-size.service';

describe('CampaignFreeOfferSizeResolver', () => {
  let resolver: CampaignFreeOfferSizeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignFreeOfferSizeResolver, CampaignFreeOfferSizeService],
    }).compile();

    resolver = module.get<CampaignFreeOfferSizeResolver>(CampaignFreeOfferSizeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
