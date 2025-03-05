import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { CampaignPetForms } from './CampaignPetForms';
import { CouponSubjects } from './CouponSubjects';
import { Users } from './Users';
import { Invoices } from './Invoices';
import { ReturnRequests } from './ReturnRequests';
import { UtmGoogleFormCoupons } from './UtmGoogleFormCoupons';

@ObjectType()
export class Coupon {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field(() => Int)
  offType: number;

  @Field(() => Float)
  discount: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => Int)
  maxUsage: number;

  @Field(() => Float, { nullable: true })
  minInvoicePrice?: number;

  @Field(() => Float, { nullable: true })
  maxDiscountPrice?: number;

  @Field(() => Int, { nullable: true })
  isApplicableToDiscountedProducts?: number;

  @Field()
  forOldCustomersOnly: boolean;

  @Field()
  forReadyProductsOnly: boolean;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  retargetingUserId?: number;

  @Field(() => Int, { nullable: true })
  retargetingInvoiceId?: number;

  @Field(() => Int, { nullable: true })
  maxPercent?: number;

  @Field()
  onlyForOutOfStocks: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field(() => Int, { nullable: true })
  isActive?: number;

  @Field(() => Int, { nullable: true })
  createdBy?: number;

  @Field(() => Int, { nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  onlyForOneItem: boolean;

  @Field()
  forNewCustomersOnly: boolean;

  @Field(() => [CampaignPetForms])
  campaignPetForms: CampaignPetForms[];

  @Field(() => [CouponSubjects])
  couponSubjects: CouponSubjects[];

  @Field(() => Users)
  createdBy2: Users;

  @Field(() => Invoices)
  retargetingInvoice: Invoices;

  @Field(() => Users)
  retargetingUser: Users;

  @Field(() => Users)
  updatedBy2: Users;

  @Field(() => Users)
  user: Users;

  @Field(() => [Invoices])
  invoices: Invoices[];

  @Field(() => [ReturnRequests])
  returnRequests: ReturnRequests[];

  @Field(() => [UtmGoogleFormCoupons])
  utmGoogleFormCoupons: UtmGoogleFormCoupons[];
}
