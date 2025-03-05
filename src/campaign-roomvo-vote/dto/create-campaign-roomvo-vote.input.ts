import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCampaignRoomvoVoteInput {
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
