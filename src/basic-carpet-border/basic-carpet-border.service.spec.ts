import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetBorderService } from './basic-carpet-border.service';

describe('BasicCarpetBorderService', () => {
  let service: BasicCarpetBorderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetBorderService],
    }).compile();

    service = module.get<BasicCarpetBorderService>(BasicCarpetBorderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
