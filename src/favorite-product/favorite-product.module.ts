import { Module } from '@nestjs/common';
import { FavoriteProductService } from './favorite-product.service';
import { FavoriteProductResolver } from './favorite-product.resolver';

@Module({
  providers: [FavoriteProductResolver, FavoriteProductService],
})
export class FavoriteProductModule {}
