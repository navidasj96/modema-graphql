import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetColorResolver } from './basic-carpet-color.resolver';
import { BasicCarpetColorService } from './basic-carpet-color.service';

describe('BasicCarpetColorResolver', () => {
  let resolver: BasicCarpetColorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetColorResolver, BasicCarpetColorService],
    }).compile();

    resolver = module.get<BasicCarpetColorResolver>(BasicCarpetColorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
