import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateIncredibleOfferSentNotificationInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;
}
