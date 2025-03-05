import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCrmPresentationInput {
  @Field({ nullable: true })
  mobile?: string;

  @Field(() => Int, { nullable: true })
  optionId?: number;
}
