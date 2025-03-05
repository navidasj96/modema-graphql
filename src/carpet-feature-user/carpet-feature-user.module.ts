import { Module } from '@nestjs/common';
import { CarpetFeatureUserService } from './carpet-feature-user.service';
import { CarpetFeatureUserResolver } from './carpet-feature-user.resolver';

@Module({
  providers: [CarpetFeatureUserResolver, CarpetFeatureUserService],
})
export class CarpetFeatureUserModule {}
