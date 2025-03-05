import { Test, TestingModule } from '@nestjs/testing';
import { AutomationEventService } from './automation-event.service';

describe('AutomationEventService', () => {
  let service: AutomationEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutomationEventService],
    }).compile();

    service = module.get<AutomationEventService>(AutomationEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
