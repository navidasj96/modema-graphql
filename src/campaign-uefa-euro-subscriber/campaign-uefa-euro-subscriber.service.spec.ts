import { Test, TestingModule } from '@nestjs/testing';
import { CampaignUefaEuroSubscriberService } from './campaign-uefa-euro-subscriber.service';

describe('CampaignUefaEuroSubscriberService', () => {
  let service: CampaignUefaEuroSubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignUefaEuroSubscriberService],
    }).compile();

    service = module.get<CampaignUefaEuroSubscriberService>(CampaignUefaEuroSubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
