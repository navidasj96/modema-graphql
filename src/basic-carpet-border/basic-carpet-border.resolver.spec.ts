import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetBorderResolver } from './basic-carpet-border.resolver';
import { BasicCarpetBorderService } from './basic-carpet-border.service';

describe('BasicCarpetBorderResolver', () => {
  let resolver: BasicCarpetBorderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetBorderResolver, BasicCarpetBorderService],
    }).compile();

    resolver = module.get<BasicCarpetBorderResolver>(BasicCarpetBorderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
