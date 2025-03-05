import { Module } from '@nestjs/common';
import { CarpetSizeService } from './carpet-size.service';
import { CarpetSizeResolver } from './carpet-size.resolver';

@Module({
  providers: [CarpetSizeResolver, CarpetSizeService],
})
export class CarpetSizeModule {}
