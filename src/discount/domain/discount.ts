import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { DiscountSubjects } from './DiscountSubjects';
import { Users } from './Users';
import { IncredibleOffers } from './IncredibleOffers';
import { InvoiceProductHistories } from './InvoiceProductHistories';
import { InvoiceProducts } from './InvoiceProducts';

@ObjectType()
export class Discount {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int)
  type: number;

  @Field(() => Float)
  discount: number;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field(() => Float, { nullable: true })
  minProductPrice?: number;

  @Field(() => Float, { nullable: true })
  maxDiscountPrice?: number;

  @Field()
  withPad: boolean;

  @Field()
  redisIsDeleted: boolean;

  @Field()
  redisForShowoffIsDeleted: boolean;

  @Field({ nullable: true })
  showoffStartDate?: Date;

  @Field({ nullable: true })
  showoffEndDate?: Date;

  @Field()
  hasStockCountOnly: boolean;

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

  @Field(() => [DiscountSubjects])
  discountSubjects: DiscountSubjects[];

  @Field(() => Users)
  createdBy2: Users;

  @Field(() => Users)
  updatedBy2: Users;

  @Field(() => [IncredibleOffers])
  incredibleOffers: IncredibleOffers[];

  @Field(() => [InvoiceProductHistories])
  invoiceProductHistories: InvoiceProductHistories[];

  @Field(() => [InvoiceProducts])
  invoiceProducts: InvoiceProducts[];
}
