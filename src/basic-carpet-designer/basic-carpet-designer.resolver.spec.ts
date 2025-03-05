import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetDesignerResolver } from './basic-carpet-designer.resolver';
import { BasicCarpetDesignerService } from './basic-carpet-designer.service';

describe('BasicCarpetDesignerResolver', () => {
  let resolver: BasicCarpetDesignerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetDesignerResolver, BasicCarpetDesignerService],
    }).compile();

    resolver = module.get<BasicCarpetDesignerResolver>(BasicCarpetDesignerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
