import { Test, TestingModule } from '@nestjs/testing';
import { AutomationRfmScoreResolver } from './automation-rfm-score.resolver';
import { AutomationRfmScoreService } from './automation-rfm-score.service';

describe('AutomationRfmScoreResolver', () => {
  let resolver: AutomationRfmScoreResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomationRfmScoreResolver, AutomationRfmScoreService],
    }).compile();

    resolver = module.get<AutomationRfmScoreResolver>(AutomationRfmScoreResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
