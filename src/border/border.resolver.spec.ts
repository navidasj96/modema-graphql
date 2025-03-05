import { Test, TestingModule } from '@nestjs/testing';
import { BorderResolver } from './border.resolver';
import { BorderService } from './border.service';

describe('BorderResolver', () => {
  let resolver: BorderResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorderResolver, BorderService],
    }).compile();

    resolver = module.get<BorderResolver>(BorderResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
