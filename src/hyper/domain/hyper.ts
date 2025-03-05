import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Hyper {
  @Field()
  code: string;

  @Field(() => Int, { nullable: true })
  depot?: number;

  @Field(() => Int, { nullable: true })
  produce?: number;
}
