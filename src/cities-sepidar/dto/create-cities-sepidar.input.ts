import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCitiesSepidarInput {
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
