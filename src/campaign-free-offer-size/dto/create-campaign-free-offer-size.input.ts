import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCampaignFreeOfferSizeInput {
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
