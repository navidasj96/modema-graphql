import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Users } from './Users';

@ObjectType()
export class CampaignInstagramFollow {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  phoneVerified: boolean;

  @Field(() => Int, { nullable: true })
  birthYear?: number;

  @Field(() => Int, { nullable: true })
  sex?: number;

  @Field(() => Int, { nullable: true })
  answerNo?: number;

  @Field({ nullable: true })
  image1?: string;

  @Field({ nullable: true })
  image2?: string;

  @Field({ nullable: true })
  verificationCode?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;
}