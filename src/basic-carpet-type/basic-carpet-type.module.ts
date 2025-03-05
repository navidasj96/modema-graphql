import { Module } from '@nestjs/common';
import { BasicCarpetTypeService } from './basic-carpet-type.service';
import { BasicCarpetTypeResolver } from './basic-carpet-type.resolver';

@Module({
  providers: [BasicCarpetTypeResolver, BasicCarpetTypeService],
})
export class BasicCarpetTypeModule {}
