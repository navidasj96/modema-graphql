import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IncredibleOffers } from './IncredibleOffers';
import { ProductColorImages } from './ProductColorImages';
import { ProductColorSales } from './ProductColorSales';
import { ProductVideo } from './ProductVideo';
import { Products } from './Products';
import { Subproducts } from './Subproducts';
import { TorobProducts } from './TorobProducts';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BasicCarpetColor {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field()
  shortCode?: string;

  @Field()
  colorCode?: string;

  @Field()
  russianTitle?: string;

  @Field()
  persianTitle?: string;

  @Field()
  englishTitle?: string;

  @Field()
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  spanishTitle?: string;

  @Field()
  incredibleOffers: IncredibleOffers[];

  @Field()
  productColorImages: ProductColorImages[];

  @Field()
  productColorSales: ProductColorSales[];

  @Field()
  productVideos: ProductVideo[];

  @Field()
  products: Products[];

  @Field()
  subproducts: Subproducts[];

  @Field()
  torobProducts: TorobProducts[];
}
