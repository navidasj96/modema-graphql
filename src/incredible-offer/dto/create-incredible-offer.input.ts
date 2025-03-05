import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateIncredibleOfferInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  offerDate: string;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  basicCarpetColorId: number;

  @Field(() => Int, { nullable: true })
  discountId?: number;

  @Field(() => Int)
  discountPercent: number;

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  soldCount: number;

  @Field()
  isFake: boolean;

  @Field(() => Int)
  sortOrder: number;

  @Field(() => Int, { nullable: true })
  place?: number;

  @Field(() => BasicCarpetColors)
  basicCarpetColor: BasicCarpetColors;

  @Field(() => Discounts)
  discount: Discounts;

  @Field(() => Products)
  product: Products;
}
