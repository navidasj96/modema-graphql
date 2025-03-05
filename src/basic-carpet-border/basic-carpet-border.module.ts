import { Module } from '@nestjs/common';
import { BasicCarpetBorderService } from './basic-carpet-border.service';
import { BasicCarpetBorderResolver } from './basic-carpet-border.resolver';

@Module({
  providers: [BasicCarpetBorderResolver, BasicCarpetBorderService],
})
export class BasicCarpetBorderModule {}
