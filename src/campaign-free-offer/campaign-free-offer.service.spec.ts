import { Test, TestingModule } from '@nestjs/testing';
import { CampaignFreeOfferService } from './campaign-free-offer.service';

describe('CampaignFreeOfferService', () => {
  let service: CampaignFreeOfferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignFreeOfferService],
    }).compile();

    service = module.get<CampaignFreeOfferService>(CampaignFreeOfferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
