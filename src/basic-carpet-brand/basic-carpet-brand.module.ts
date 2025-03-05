import { Module } from '@nestjs/common';
import { BasicCarpetBrandService } from './basic-carpet-brand.service';
import { BasicCarpetBrandResolver } from './basic-carpet-brand.resolver';

@Module({
  providers: [BasicCarpetBrandResolver, BasicCarpetBrandService],
})
export class BasicCarpetBrandModule {}
