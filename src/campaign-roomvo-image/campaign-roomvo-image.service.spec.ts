import { Test, TestingModule } from '@nestjs/testing';
import { CampaignRoomvoImageService } from './campaign-roomvo-image.service';

describe('CampaignRoomvoImageService', () => {
  let service: CampaignRoomvoImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignRoomvoImageService],
    }).compile();

    service = module.get<CampaignRoomvoImageService>(CampaignRoomvoImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
