import { Test, TestingModule } from '@nestjs/testing';
import { ColorCategoryResolver } from './color-category.resolver';
import { ColorCategoryService } from './color-category.service';

describe('ColorCategoryResolver', () => {
  let resolver: ColorCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColorCategoryResolver, ColorCategoryService],
    }).compile();

    resolver = module.get<ColorCategoryResolver>(ColorCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
