import { Module } from '@nestjs/common';
import { ImageProductService } from './image-product.service';
import { ImageProductResolver } from './image-product.resolver';

@Module({
  providers: [ImageProductResolver, ImageProductService],
})
export class ImageProductModule {}
