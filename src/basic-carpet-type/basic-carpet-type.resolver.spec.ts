import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetTypeResolver } from './basic-carpet-type.resolver';
import { BasicCarpetTypeService } from './basic-carpet-type.service';

describe('BasicCarpetTypeResolver', () => {
  let resolver: BasicCarpetTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetTypeResolver, BasicCarpetTypeService],
    }).compile();

    resolver = module.get<BasicCarpetTypeResolver>(BasicCarpetTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
