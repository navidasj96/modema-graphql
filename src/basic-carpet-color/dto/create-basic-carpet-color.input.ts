import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetColorInput {
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
