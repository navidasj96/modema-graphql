import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetSizeService } from './basic-carpet-size.service';

describe('BasicCarpetSizeService', () => {
  let service: BasicCarpetSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetSizeService],
    }).compile();

    service = module.get<BasicCarpetSizeService>(BasicCarpetSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
