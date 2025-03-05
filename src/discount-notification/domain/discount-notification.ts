import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Products } from './Products';
import { Users } from './Users';

@ObjectType()
export class DiscountNotification {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => Products)
  product: Products;

  @Field(() => Users)
  user: Users;
}
