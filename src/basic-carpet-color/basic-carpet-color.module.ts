import { Module } from '@nestjs/common';
import { BasicCarpetColorService } from './basic-carpet-color.service';
import { BasicCarpetColorResolver } from './basic-carpet-color.resolver';

@Module({
  providers: [BasicCarpetColorResolver, BasicCarpetColorService],
})
export class BasicCarpetColorModule {}
