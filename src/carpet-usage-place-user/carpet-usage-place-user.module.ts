import { Module } from '@nestjs/common';
import { CarpetUsagePlaceUserService } from './carpet-usage-place-user.service';
import { CarpetUsagePlaceUserResolver } from './carpet-usage-place-user.resolver';

@Module({
  providers: [CarpetUsagePlaceUserResolver, CarpetUsagePlaceUserService],
})
export class CarpetUsagePlaceUserModule {}
