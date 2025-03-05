import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCampaignVotingImageUserInput {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  imageId?: number;

  @Field(() => Int)
  campaignNo: number;

  @Field(() => Int)
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Images)
  image: Images;
}
