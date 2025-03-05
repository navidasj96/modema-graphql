import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDiscountSubjectInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  discountId: number;

  @Field(() => Int, { nullable: true })
  productCategoryId?: number;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => Int, { nullable: true })
  subproductId?: number;

  @Field(() => Int, { nullable: true })
  basicCarpetSizeId?: number;

  @Field(() => Int, { nullable: true })
  priceGroupId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field(() => PriceGroups)
  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSizes)
  basicCarpetSize: BasicCarpetSizes;

  @Field(() => Discounts)
  discount: Discounts;

  priceGroup: PriceGroups;

  @Field(() => ProductCategories)
  productCategory: ProductCategories;

  @Field(() => Products)
  product: Products;

  @Field(() => Subproducts)
  subproduct: Subproducts;
}
