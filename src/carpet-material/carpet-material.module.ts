import { Module } from '@nestjs/common';
import { CarpetMaterialService } from './carpet-material.service';
import { CarpetMaterialResolver } from './carpet-material.resolver';

@Module({
  providers: [CarpetMaterialResolver, CarpetMaterialService],
})
export class CarpetMaterialModule {}
