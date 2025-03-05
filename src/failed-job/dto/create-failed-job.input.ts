import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFailedJobInput {
  @Field(() => Int)
  id: string;

  @Field()
  connection: string;

  @Field()
  queue: string;

  @Field()
  payload: string;

  @Field()
  exception: string;

  @Field()
  failedAt: Date;
}
