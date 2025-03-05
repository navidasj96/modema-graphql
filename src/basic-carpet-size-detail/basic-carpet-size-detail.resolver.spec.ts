import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetSizeDetailResolver } from './basic-carpet-size-detail.resolver';
import { BasicCarpetSizeDetailService } from './basic-carpet-size-detail.service';

describe('BasicCarpetSizeDetailResolver', () => {
  let resolver: BasicCarpetSizeDetailResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetSizeDetailResolver, BasicCarpetSizeDetailService],
    }).compile();

    resolver = module.get<BasicCarpetSizeDetailResolver>(BasicCarpetSizeDetailResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
