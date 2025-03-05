import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCampaignGoldCoinSubInput {
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
