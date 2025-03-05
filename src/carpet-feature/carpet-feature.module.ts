import { Module } from '@nestjs/common';
import { CarpetFeatureService } from './carpet-feature.service';
import { CarpetFeatureResolver } from './carpet-feature.resolver';

@Module({
  providers: [CarpetFeatureResolver, CarpetFeatureService],
})
export class CarpetFeatureModule {}
