import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateCampaignFreeOfferInput {
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
