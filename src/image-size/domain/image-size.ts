import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { ProductCategories } from './ProductCategories';

@ObjectType()
export class ImageSize {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  shortName: string;

  @Field(() => Float)
  width: number;

  @Field(() => Float)
  height: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductCategories])
  productCategories: ProductCategories[];
}
