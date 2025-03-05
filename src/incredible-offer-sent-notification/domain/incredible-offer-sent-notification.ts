import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Users } from './Users';

@ObjectType()
export class IncredibleOfferSentNotification {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;
}
