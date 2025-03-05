import { Test, TestingModule } from '@nestjs/testing';
import { CarpetSizeService } from './carpet-size.service';

describe('CarpetSizeService', () => {
  let service: CarpetSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetSizeService],
    }).compile();

    service = module.get<CarpetSizeService>(CarpetSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
