import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CampaignRoomvoImages } from './CampaignRoomvoImages';
import { Users } from './Users';

@ObjectType()
export class CampaignRoomvoVote {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  campaignRoomvoImageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CampaignRoomvoImages)
  campaignRoomvoImage: CampaignRoomvoImages;

  @Field(() => Users)
  user: Users;
}
