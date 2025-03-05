import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetMaterialResolver } from './basic-carpet-material.resolver';
import { BasicCarpetMaterialService } from './basic-carpet-material.service';

describe('BasicCarpetMaterialResolver', () => {
  let resolver: BasicCarpetMaterialResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetMaterialResolver, BasicCarpetMaterialService],
    }).compile();

    resolver = module.get<BasicCarpetMaterialResolver>(BasicCarpetMaterialResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
