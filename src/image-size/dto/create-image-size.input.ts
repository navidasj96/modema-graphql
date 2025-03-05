import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateImageSizeInput {
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
