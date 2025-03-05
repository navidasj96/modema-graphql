import { Field, ObjectType, Int } from '@nestjs/graphql';
import { BasicCarpetSizes } from './BasicCarpetSizes';
import { Discounts } from './Discounts';
import { PriceGroups } from './PriceGroups';
import { ProductCategories } from './ProductCategories';
import { Products } from './Products';
import { Subproducts } from './Subproducts';

@ObjectType()
export class DiscountSubject {
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
