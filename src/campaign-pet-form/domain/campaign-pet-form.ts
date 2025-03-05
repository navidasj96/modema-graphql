import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Coupons } from './Coupons';
import { Users } from './Users';

@ObjectType()
export class CampaignPetForms {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  petName?: string;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  discountAmount: number;

  @Field(() => Int)
  donationAmount: number;

  @Field({ nullable: true })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  mime?: string;

  @Field({ nullable: true })
  originalFilename?: string;

  @Field(() => Int, { nullable: true })
  couponId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Coupons)
  coupon: Coupons;

  @Field(() => Users)
  user: Users;
}
