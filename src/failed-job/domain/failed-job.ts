import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class FailedJob {
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
