import { Module } from '@nestjs/common';
import { ImagesSizeGuidesDetailService } from './images-size-guides-detail.service';
import { ImagesSizeGuidesDetailResolver } from './images-size-guides-detail.resolver';

@Module({
  providers: [ImagesSizeGuidesDetailResolver, ImagesSizeGuidesDetailService],
})
export class ImagesSizeGuidesDetailModule {}
