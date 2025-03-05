import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetSizeResolver } from './basic-carpet-size.resolver';
import { BasicCarpetSizeService } from './basic-carpet-size.service';

describe('BasicCarpetSizeResolver', () => {
  let resolver: BasicCarpetSizeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetSizeResolver, BasicCarpetSizeService],
    }).compile();

    resolver = module.get<BasicCarpetSizeResolver>(BasicCarpetSizeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
