import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CampaignUefaEuroSubscriberHistories } from './CampaignUefaEuroSubscriberHistories';
import { ContactFormStatuses } from './ContactFormStatuses';
import { Users } from './Users';

@ObjectType()
export class CampaignUefaEuroSubscribers {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field()
  mobile: string;

  @Field(() => Int)
  status: number;

  @Field(() => Int)
  contactFormStatusId: number;

  @Field(() => [CampaignUefaEuroSubscriberHistories])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistories[];

  @Field(() => ContactFormStatuses)
  contactFormStatus: ContactFormStatuses;

  @Field(() => Users)
  user: Users;
}
