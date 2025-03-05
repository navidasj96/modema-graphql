import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Users } from './Users';

@ObjectType()
export class GoogleFormUtm {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field()
  formId: string;

  @Field()
  url: string;

  @Field()
  utm: string;

  @Field()
  status: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;
}
