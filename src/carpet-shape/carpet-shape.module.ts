import { Module } from '@nestjs/common';
import { CarpetShapeService } from './carpet-shape.service';
import { CarpetShapeResolver } from './carpet-shape.resolver';

@Module({
  providers: [CarpetShapeResolver, CarpetShapeService],
})
export class CarpetShapeModule {}
