import { Module } from '@nestjs/common';
import { BasicCarpetMaterialService } from './basic-carpet-material.service';
import { BasicCarpetMaterialResolver } from './basic-carpet-material.resolver';

@Module({
  providers: [BasicCarpetMaterialResolver, BasicCarpetMaterialService],
})
export class BasicCarpetMaterialModule {}
