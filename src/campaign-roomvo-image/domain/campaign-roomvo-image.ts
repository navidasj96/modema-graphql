import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Users } from './Users';
import { CampaignRoomvoVotes } from './CampaignRoomvoVotes';

@ObjectType()
export class CampaignRoomvoImages {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  votesCount: number;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  originalFilename?: string;

  @Field({ nullable: true })
  mime?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;

  @Field(() => [CampaignRoomvoVotes])
  campaignRoomvoVotes: CampaignRoomvoVotes[];
}
