import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetMaterialService } from './basic-carpet-material.service';

describe('BasicCarpetMaterialService', () => {
  let service: BasicCarpetMaterialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetMaterialService],
    }).compile();

    service = module.get<BasicCarpetMaterialService>(BasicCarpetMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
