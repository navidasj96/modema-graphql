import { Test, TestingModule } from '@nestjs/testing';
import { CarpetSizeResolver } from './carpet-size.resolver';
import { CarpetSizeService } from './carpet-size.service';

describe('CarpetSizeResolver', () => {
  let resolver: CarpetSizeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetSizeResolver, CarpetSizeService],
    }).compile();

    resolver = module.get<CarpetSizeResolver>(CarpetSizeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
