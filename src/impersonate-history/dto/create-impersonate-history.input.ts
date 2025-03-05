import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateImpersonateHistoryInput {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  impersonateUserId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  impersonateUser: Users;

  @Field(() => Users)
  user: Users;
}
