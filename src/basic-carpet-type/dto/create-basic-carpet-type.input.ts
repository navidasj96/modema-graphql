import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetTypeInput {
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
