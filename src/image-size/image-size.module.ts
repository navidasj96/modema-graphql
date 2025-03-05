import { Module } from '@nestjs/common';
import { ImageSizeService } from './image-size.service';
import { ImageSizeResolver } from './image-size.resolver';

@Module({
  providers: [ImageSizeResolver, ImageSizeService],
})
export class ImageSizeModule {}
