import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Products } from './Products';
import { Videos } from './Videos';

@ObjectType()
export class CustomerVideoProduct {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  videoId: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Products)
  product: Products;

  @Field(() => Videos)
  video: Videos;
}
