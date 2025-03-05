import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateColorCategorySubproductInput {
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
