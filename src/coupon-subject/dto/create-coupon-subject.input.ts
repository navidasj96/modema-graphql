import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCouponSubjectInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  couponId: number;

  @Field(() => Int, { nullable: true })
  productCategoryId?: number;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => Int, { nullable: true })
  subproductId?: number;

  @Field(() => Int, { nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSizes)
  basicCarpetSize: BasicCarpetSizes;

  @Field(() => Coupons)
  coupon: Coupons;

  @Field(() => ProductCategories)
  productCategory: ProductCategories;

  @Field(() => Products)
  product: Products;

  @Field(() => Subproducts)
  subproduct: Subproducts;
}
