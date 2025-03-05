import { Test, TestingModule } from '@nestjs/testing';
import { AutomationRfmScoreService } from './automation-rfm-score.service';

describe('AutomationRfmScoreService', () => {
  let service: AutomationRfmScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomationRfmScoreService],
    }).compile();

    service = module.get<AutomationRfmScoreService>(AutomationRfmScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
