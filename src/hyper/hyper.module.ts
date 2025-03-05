import { Module } from '@nestjs/common';
import { HyperService } from './hyper.service';
import { HyperResolver } from './hyper.resolver';

@Module({
  providers: [HyperResolver, HyperService],
})
export class HyperModule {}
