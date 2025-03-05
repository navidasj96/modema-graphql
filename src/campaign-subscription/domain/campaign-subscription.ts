import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Users } from './Users';

@ObjectType()
export class CampaignSubscription {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  campaignName?: string;

  @Field(() => Int)
  userId: number;

  @Field(() => Int, { nullable: true })
  code?: number;

  @Field(() => Users)
  user: Users;
}
