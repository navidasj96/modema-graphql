import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberHistories } from './CampaignUefaEuroSubscriberHistories';
import { CampaignUefaEuroSubscribers } from './CampaignUefaEuroSubscribers';
import { ContactFormHistories } from './ContactFormHistories';
import { ContactForms } from './ContactForms';

@ObjectType()
export class ContactFormStatus {
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
