import { Test, TestingModule } from '@nestjs/testing';
import { CampaignPetFormResolver } from './campaign-pet-form.resolver';
import { CampaignPetFormService } from './campaign-pet-form.service';

describe('CampaignPetFormResolver', () => {
  let resolver: CampaignPetFormResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignPetFormResolver, CampaignPetFormService],
    }).compile();

    resolver = module.get<CampaignPetFormResolver>(CampaignPetFormResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
