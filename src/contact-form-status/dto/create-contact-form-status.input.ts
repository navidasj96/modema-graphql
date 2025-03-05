import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateContactFormStatusInput {
  @Field(() => Int)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CampaignUefaEuroSubscriberHistories])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistories[];

  @Field(() => [CampaignUefaEuroSubscribers])
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscribers[];

  @Field(() => [ContactFormHistories])
  contactFormHistories: ContactFormHistories[];

  @Field(() => [ContactForms])
  contactForms: ContactForms[];
}
