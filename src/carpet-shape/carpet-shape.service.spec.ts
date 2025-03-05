import { Test, TestingModule } from '@nestjs/testing';
import { CarpetShapeService } from './carpet-shape.service';

describe('CarpetShapeService', () => {
  let service: CarpetShapeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarpetShapeService],
    }).compile();

    service = module.get<CarpetShapeService>(CarpetShapeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
