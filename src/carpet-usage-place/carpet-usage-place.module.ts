import { Module } from '@nestjs/common';
import { CarpetUsagePlaceService } from './carpet-usage-place.service';
import { CarpetUsagePlaceResolver } from './carpet-usage-place.resolver';

@Module({
  providers: [CarpetUsagePlaceResolver, CarpetUsagePlaceService],
})
export class CarpetUsagePlaceModule {}
