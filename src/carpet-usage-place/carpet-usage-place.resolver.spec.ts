import { Test, TestingModule } from '@nestjs/testing';
import { CarpetUsagePlaceResolver } from './carpet-usage-place.resolver';
import { CarpetUsagePlaceService } from './carpet-usage-place.service';

describe('CarpetUsagePlaceResolver', () => {
  let resolver: CarpetUsagePlaceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetUsagePlaceResolver, CarpetUsagePlaceService],
    }).compile();

    resolver = module.get<CarpetUsagePlaceResolver>(CarpetUsagePlaceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
