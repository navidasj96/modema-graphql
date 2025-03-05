import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDiscountNotificationInput {
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
