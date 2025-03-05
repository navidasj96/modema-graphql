import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class BasicCarpetTypes {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => [Subproducts])
  subproducts: Subproducts[];
}