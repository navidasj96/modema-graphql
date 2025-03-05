import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class City2 {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  sepidarId?: number;
}
