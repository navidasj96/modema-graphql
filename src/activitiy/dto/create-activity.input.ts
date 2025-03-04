import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateActivityInput {
  @Field()
  id: string;

  @Field(() => Number)
  userId: number | null;

  @Field()
  userName: string;

  @Field()
  contentId: number;

  @Field()
  contentType: string;

  @Field()
  action: string;

  @Field()
  description: string;

  @Field()
  details: string;

  @Field(() => Date)
  createdAt: Date | null;

  @Field(() => Date)
  updatedAt: Date | null;

  @Field()
  deletedUserId: number | null;

  @Field()
  @Field()
  user: Users;
}
