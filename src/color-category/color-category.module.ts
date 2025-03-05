import { Module } from '@nestjs/common';
import { ColorCategoryService } from './color-category.service';
import { ColorCategoryResolver } from './color-category.resolver';

@Module({
  providers: [ColorCategoryResolver, ColorCategoryService],
})
export class ColorCategoryModule {}
