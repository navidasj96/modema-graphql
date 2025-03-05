import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDesignersProductPriceRangeInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  basicCarpetSizeId: number;

  @Field(() => Float)
  minPrice: number;

  @Field(() => Float)
  maxPrice: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSizes)
  basicCarpetSize: BasicCarpetSizes;
}
