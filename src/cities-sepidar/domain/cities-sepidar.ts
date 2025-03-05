import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CitiesSepidar {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  stateName?: string;

  @Field(() => Int, { nullable: true })
  sepidarStateId?: number;

  @Field(() => Int, { nullable: true })
  stateId?: number;

  @Field(() => Int, { nullable: true })
  cityId?: number;
}
