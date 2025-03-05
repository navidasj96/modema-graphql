import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Products } from './Products';
import { Subproducts } from './Subproducts';
import { Users } from './Users';

@ObjectType()
export class FavoriteProduct {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int, { nullable: true })
  subproductId?: number;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Products)
  product: Products;

  @Field(() => Subproducts)
  subproduct: Subproducts;

  @Field(() => Users)
  user: Users;
}
