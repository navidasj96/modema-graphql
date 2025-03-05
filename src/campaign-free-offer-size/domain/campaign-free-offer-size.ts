import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class CampaignFreeOfferSize {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  campaignFreeOfferId: number;

  @Field(() => Int)
  basicCarpetSizeId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSizes)
  basicCarpetSize: BasicCarpetSizes;

  @Field(() => CampaignFreeOffers)
  campaignFreeOffer: CampaignFreeOffers;
}