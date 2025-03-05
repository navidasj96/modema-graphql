import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarpetSizeInput {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  width: number;

  @Field(() => Float)
  length: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
