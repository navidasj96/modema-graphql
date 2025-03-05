import { Module } from '@nestjs/common';
import { ExportProductService } from './export-product.service';
import { ExportProductResolver } from './export-product.resolver';

@Module({
  providers: [ExportProductResolver, ExportProductService],
})
export class ExportProductModule {}
