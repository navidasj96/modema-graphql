import { Test, TestingModule } from '@nestjs/testing';
import { CarpetUsagePlaceUserService } from './carpet-usage-place-user.service';

describe('CarpetUsagePlaceUserService', () => {
  let service: CarpetUsagePlaceUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetUsagePlaceUserService],
    }).compile();

    service = module.get<CarpetUsagePlaceUserService>(CarpetUsagePlaceUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
