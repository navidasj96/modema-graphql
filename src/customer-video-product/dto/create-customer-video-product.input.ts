import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCustomerVideoProductInput {
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
