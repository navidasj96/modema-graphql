import { Module } from '@nestjs/common';
import { HyperstarCodeService } from './hyperstar-code.service';
import { HyperstarCodeResolver } from './hyperstar-code.resolver';

@Module({
  providers: [HyperstarCodeResolver, HyperstarCodeService],
})
export class HyperstarCodeModule {}
