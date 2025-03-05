import { Test, TestingModule } from '@nestjs/testing';
import { CarpetShapeResolver } from './carpet-shape.resolver';
import { CarpetShapeService } from './carpet-shape.service';

describe('CarpetShapeResolver', () => {
  let resolver: CarpetShapeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetShapeResolver, CarpetShapeService],
    }).compile();

    resolver = module.get<CarpetShapeResolver>(CarpetShapeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
