import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetTypeService } from './basic-carpet-type.service';

describe('BasicCarpetTypeService', () => {
  let service: BasicCarpetTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetTypeService],
    }).compile();

    service = module.get<BasicCarpetTypeService>(BasicCarpetTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
