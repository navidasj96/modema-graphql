import { Test, TestingModule } from '@nestjs/testing';
import { CampaignPetFormService } from './campaign-pet-form.service';

describe('CampaignPetFormService', () => {
  let service: CampaignPetFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignPetFormService],
    }).compile();

    service = module.get<CampaignPetFormService>(CampaignPetFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
