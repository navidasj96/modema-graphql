import { Test, TestingModule } from '@nestjs/testing';
import { BasicCarpetDesignerService } from './basic-carpet-designer.service';

describe('BasicCarpetDesignerService', () => {
  let service: BasicCarpetDesignerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCarpetDesignerService],
    }).compile();

    service = module.get<BasicCarpetDesignerService>(BasicCarpetDesignerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
