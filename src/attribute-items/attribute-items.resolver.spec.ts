import { Test, TestingModule } from '@nestjs/testing';
import { AttributeItemsResolver } from './attribute-items.resolver';
import { AttributeItemsService } from './attribute-items.service';

describe('AttributeItemsResolver', () => {
  let resolver: AttributeItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributeItemsResolver, AttributeItemsService],
    }).compile();

    resolver = module.get<AttributeItemsResolver>(AttributeItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
