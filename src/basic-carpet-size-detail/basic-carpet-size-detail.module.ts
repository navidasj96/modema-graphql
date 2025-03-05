import { Module } from '@nestjs/common';
import { BasicCarpetSizeDetailService } from './basic-carpet-size-detail.service';
import { BasicCarpetSizeDetailResolver } from './basic-carpet-size-detail.resolver';

@Module({
  providers: [BasicCarpetSizeDetailResolver, BasicCarpetSizeDetailService],
})
export class BasicCarpetSizeDetailModule {}
