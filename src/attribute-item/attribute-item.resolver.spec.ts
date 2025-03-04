import { Test, TestingModule } from '@nestjs/testing';
import { AttributeItemResolver } from './attribute-item.resolver';
import { AttributeItemService } from './attribute-item.service';

describe('AttributeItemResolver', () => {
  let resolver: AttributeItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributeItemResolver, AttributeItemService],
    }).compile();

    resolver = module.get<AttributeItemResolver>(AttributeItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
