import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCampaignUefaEuroSubscriberInput {
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
