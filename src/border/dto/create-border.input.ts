import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBorderInput {
  @Field(() => Int)
  id: number;

  @Field()
  code: string;

  @Field(() => Int, { nullable: true })
  count?: number;
}
