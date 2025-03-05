import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ColorCategories } from './ColorCategories';
import { Subproducts } from './Subproducts';

@ObjectType()
export class ColorCategorySubproduct {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  colorCategoryId: number;

  @Field(() => Int)
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ColorCategories)
  colorCategory: ColorCategories;

  @Field(() => Subproducts)
  subproduct: Subproducts;
}
