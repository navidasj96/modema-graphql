import { Test, TestingModule } from '@nestjs/testing';
import { BorderService } from './border.service';

describe('BorderService', () => {
  let service: BorderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorderService],
    }).compile();

    service = module.get<BorderService>(BorderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
