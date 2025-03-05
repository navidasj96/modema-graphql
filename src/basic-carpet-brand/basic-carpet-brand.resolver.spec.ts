import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetBrandResolver } from './basic-carpet-brand.resolver';
import { BasicCarpetBrandService } from './basic-carpet-brand.service';

describe('BasicCarpetBrandResolver', () => {
  let resolver: BasicCarpetBrandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetBrandResolver, BasicCarpetBrandService],
    }).compile();

    resolver = module.get<BasicCarpetBrandResolver>(BasicCarpetBrandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
