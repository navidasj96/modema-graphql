import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CarpetSize {
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
