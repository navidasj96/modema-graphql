import { Users } from '../../entities/entities/Users';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Activity {
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
  user: Users;
}
