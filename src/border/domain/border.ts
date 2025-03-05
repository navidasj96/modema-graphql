import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Border {
  @Field(() => Int)
  id: number;

  @Field()
  code: string;

  @Field(() => Int, { nullable: true })
  count?: number;
}
