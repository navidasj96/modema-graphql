import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateHyperInput {
  @Field()
  code: string;

  @Field(() => Int, { nullable: true })
  depot?: number;

  @Field(() => Int, { nullable: true })
  produce?: number;
}
