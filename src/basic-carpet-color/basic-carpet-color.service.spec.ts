import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetColorService } from './basic-carpet-color.service';

describe('BasicCarpetColorService', () => {
  let service: BasicCarpetColorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetColorService],
    }).compile();

    service = module.get<BasicCarpetColorService>(BasicCarpetColorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
