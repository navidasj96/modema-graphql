import { Module } from '@nestjs/common';
import { BasicCarpetSizeService } from './basic-carpet-size.service';
import { BasicCarpetSizeResolver } from './basic-carpet-size.resolver';

@Module({
  providers: [BasicCarpetSizeResolver, BasicCarpetSizeService],
})
export class BasicCarpetSizeModule {}
