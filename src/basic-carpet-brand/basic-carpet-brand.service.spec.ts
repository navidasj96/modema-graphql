import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetBrandService } from './basic-carpet-brand.service';

describe('BasicCarpetBrandService', () => {
  let service: BasicCarpetBrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetBrandService],
    }).compile();

    service = module.get<BasicCarpetBrandService>(BasicCarpetBrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
