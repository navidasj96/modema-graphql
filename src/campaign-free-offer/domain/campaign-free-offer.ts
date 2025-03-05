import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class CampaignFreeOffer {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  minPrice: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CampaignFreeOfferSizes])
  campaignFreeOfferSizes: CampaignFreeOfferSizes[];
}