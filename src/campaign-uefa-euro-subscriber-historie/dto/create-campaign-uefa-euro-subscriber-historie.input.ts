import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCampaignUefaEuroSubscriberHistorieInput {
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
