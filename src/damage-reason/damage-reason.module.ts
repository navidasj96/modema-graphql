import { Module } from '@nestjs/common';
import { DamageReasonService } from './damage-reason.service';
import { DamageReasonResolver } from './damage-reason.resolver';

@Module({
  providers: [DamageReasonResolver, DamageReasonService],
})
export class DamageReasonModule {}
