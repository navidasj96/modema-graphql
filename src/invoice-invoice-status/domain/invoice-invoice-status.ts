import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Invoices } from './Invoices';
import { InvoiceStatuses } from './InvoiceStatuses';
import { Users } from './Users';

@ObjectType()
export class InvoiceInvoiceStatus {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int)
  invoiceStatusId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field({ nullable: true })
  comment?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => InvoiceStatuses)
  invoiceStatus: InvoiceStatuses;

  @Field(() => Users)
  user: Users;
}
