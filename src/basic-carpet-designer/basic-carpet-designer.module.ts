import { Module } from '@nestjs/common';
import { BasicCarpetDesignerService } from './basic-carpet-designer.service';
import { BasicCarpetDesignerResolver } from './basic-carpet-designer.resolver';

@Module({
  providers: [BasicCarpetDesignerResolver, BasicCarpetDesignerService],
})
export class BasicCarpetDesignerModule {}
