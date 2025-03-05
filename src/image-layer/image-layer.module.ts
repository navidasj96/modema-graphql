import { Module } from '@nestjs/common';
import { ImageLayerService } from './image-layer.service';
import { ImageLayerResolver } from './image-layer.resolver';

@Module({
  providers: [ImageLayerResolver, ImageLayerService],
})
export class ImageLayerModule {}
