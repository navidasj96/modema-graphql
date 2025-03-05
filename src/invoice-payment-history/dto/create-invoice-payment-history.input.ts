import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoicePaymentHistoryInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoicePaymentId: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int, { nullable: true })
  invoiceHistoryId?: number;

  @Field(() => Int)
  invoicePaymentTypeId: number;

  @Field(() => String)
  amount: string;

  @Field(() => Boolean, { nullable: true })
  forShipping?: boolean;

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

  @Field(() => Users)
  confirmedBy2: Users;

  @Field(() => InvoiceHistories)
  invoiceHistory: InvoiceHistories;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => InvoicePayments)
  invoicePayment: InvoicePayments;

  @Field(() => InvoicePaymentTypes)
  invoicePaymentType: InvoicePaymentTypes;

  @Field(() => Users)
  user: Users;
}
