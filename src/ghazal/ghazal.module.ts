import { Module } from '@nestjs/common';
import { GhazalService } from './ghazal.service';
import { GhazalResolver } from './ghazal.resolver';

@Module({
  providers: [GhazalResolver, GhazalService],
})
export class GhazalModule {}
