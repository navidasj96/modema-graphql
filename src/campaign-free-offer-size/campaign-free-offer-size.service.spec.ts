import { Test, TestingModule } from '@nestjs/testing';
import { CampaignFreeOfferSizeService } from './campaign-free-offer-size.service';

describe('CampaignFreeOfferSizeService', () => {
  let service: CampaignFreeOfferSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignFreeOfferSizeService],
    }).compile();

    service = module.get<CampaignFreeOfferSizeService>(CampaignFreeOfferSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
