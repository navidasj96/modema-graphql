import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Users } from './Users';
import { ContactFormStatuses } from './ContactFormStatuses';
import { CampaignUefaEuroSubscribers } from './CampaignUefaEuroSubscribers';

@ObjectType()
export class CampaignUefaEuroSubscriberHistorie {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  campaignUefaEuroSubscriberId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int)
  contactFormStatusId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;

  @Field(() => ContactFormStatuses)
  contactFormStatus: ContactFormStatuses;

  @Field(() => CampaignUefaEuroSubscribers)
  campaignUefaEuroSubscriber: CampaignUefaEuroSubscribers;
}
