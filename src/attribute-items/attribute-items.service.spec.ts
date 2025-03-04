import { Test, TestingModule } from '@nestjs/testing';
import { AttributeItemsService } from './attribute-items.service';

describe('AttributeItemsService', () => {
  let service: AttributeItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AttributeItemsService],
    }).compile();

    service = module.get<AttributeItemsService>(AttributeItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
