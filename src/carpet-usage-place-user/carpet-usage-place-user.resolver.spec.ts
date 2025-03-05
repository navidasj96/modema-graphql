import { Test, TestingModule } from '@nestjs/testing';
import { CarpetUsagePlaceUserResolver } from './carpet-usage-place-user.resolver';
import { CarpetUsagePlaceUserService } from './carpet-usage-place-user.service';

describe('CarpetUsagePlaceUserResolver', () => {
  let resolver: CarpetUsagePlaceUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetUsagePlaceUserResolver, CarpetUsagePlaceUserService],
    }).compile();

    resolver = module.get<CarpetUsagePlaceUserResolver>(CarpetUsagePlaceUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
