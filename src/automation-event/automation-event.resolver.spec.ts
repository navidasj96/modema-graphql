import { Test, TestingModule } from '@nestjs/testing';
import { AutomationEventResolver } from './automation-event.resolver';
import { AutomationEventService } from './automation-event.service';

describe('AutomationEventResolver', () => {
  let resolver: AutomationEventResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomationEventResolver, AutomationEventService],
    }).compile();

    resolver = module.get<AutomationEventResolver>(AutomationEventResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
