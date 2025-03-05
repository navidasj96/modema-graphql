import { Test, TestingModule } from '@nestjs/testing';
import { CampaignRoomvoImageResolver } from './campaign-roomvo-image.resolver';
import { CampaignRoomvoImageService } from './campaign-roomvo-image.service';

describe('CampaignRoomvoImageResolver', () => {
  let resolver: CampaignRoomvoImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignRoomvoImageResolver, CampaignRoomvoImageService],
    }).compile();

    resolver = module.get<CampaignRoomvoImageResolver>(CampaignRoomvoImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
