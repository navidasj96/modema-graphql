import { Module } from '@nestjs/common';
import { ColorCategorySubproductService } from './color-category-subproduct.service';
import { ColorCategorySubproductResolver } from './color-category-subproduct.resolver';

@Module({
  providers: [ColorCategorySubproductResolver, ColorCategorySubproductService],
})
export class ColorCategorySubproductModule {}
