import { Module } from '@nestjs/common';
import { ImageSubproductService } from './image-subproduct.service';
import { ImageSubproductResolver } from './image-subproduct.resolver';

@Module({
  providers: [ImageSubproductResolver, ImageSubproductService],
})
export class ImageSubproductModule {}
