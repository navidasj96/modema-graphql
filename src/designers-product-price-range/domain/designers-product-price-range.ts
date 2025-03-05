import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { BasicCarpetSizes } from './BasicCarpetSizes';

@ObjectType()
export class DesignersProductPriceRange {
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
