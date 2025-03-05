import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCustomerImageProductInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  imageId: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Images)
  image: Images;

  @Field(() => Products)
  product: Products;
}
