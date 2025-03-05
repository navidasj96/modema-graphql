import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetSizeDetailService } from './basic-carpet-size-detail.service';

describe('BasicCarpetSizeDetailService', () => {
  let service: BasicCarpetSizeDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetSizeDetailService],
    }).compile();

    service = module.get<BasicCarpetSizeDetailService>(BasicCarpetSizeDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
