import { CreateCampaignUefaEuroSubscriberHistorieInput } from './create-campaign-uefa-euro-subscriber-historie.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCampaignUefaEuroSubscriberHistorieInput extends PartialType(CreateCampaignUefaEuroSubscriberHistorieInput) {
  @Field(() => Int)
  id: number;
}
