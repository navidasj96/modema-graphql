import { Test, TestingModule } from '@nestjs/testing';
import { CarpetUsagePlaceService } from './carpet-usage-place.service';

describe('CarpetUsagePlaceService', () => {
  let service: CarpetUsagePlaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetUsagePlaceService],
    }).compile();

    service = module.get<CarpetUsagePlaceService>(CarpetUsagePlaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
