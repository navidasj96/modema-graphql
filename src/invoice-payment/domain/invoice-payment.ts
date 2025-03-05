import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { InvoicePaymentHistories } from './InvoicePaymentHistories';
import { Users } from './Users';
import { Invoices } from './Invoices';
import { InvoicePaymentTypes } from './InvoicePaymentTypes';

@ObjectType()
export class InvoicePayment {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int)
  invoicePaymentTypeId: number;

  @Field(() => String)
  amount: string;

  @Field(() => Boolean)
  forShipping: boolean;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  refCode?: string;

  @Field({ nullable: true })
  chequeNumber?: string;

  @Field({ nullable: true })
  chequeBank?: string;

  @Field({ nullable: true })
  chequeDate?: string;

  @Field({ nullable: true })
  chequePayee?: string;

  @Field(() => Boolean, { nullable: true })
  isConfirmed?: boolean;

  @Field({ nullable: true })
  refCodeSales?: string;

  @Field(() => Int, { nullable: true })
  confirmedBy?: number;

  @Field({ nullable: true })
  paymentDate?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePaymentHistories])
  invoicePaymentHistories: InvoicePaymentHistories[];

  @Field(() => Users)
  confirmedBy2: Users;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => InvoicePaymentTypes)
  invoicePaymentType: InvoicePaymentTypes;

  @Field(() => Users)
  user: Users;
}
