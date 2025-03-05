import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Users } from './Users';

@ObjectType()
export class ImpersonateHistory {
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
