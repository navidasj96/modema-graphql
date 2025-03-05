import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CampaignGoldCoinSubs {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Int)
  userId: number;

  @Field(() => Users)
  user: Users;
}