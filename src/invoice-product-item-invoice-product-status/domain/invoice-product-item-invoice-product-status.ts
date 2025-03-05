import { Field, ObjectType, Int } from '@nestjs/graphql';
import { InvoiceProductItems } from './InvoiceProductItems';
import { InvoiceProductStatuses } from './InvoiceProductStatuses';
import { Users } from './Users';

@ObjectType()
export class InvoiceProductItemInvoiceProductStatus {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceProductItemId: number;

  @Field(() => Int)
  invoiceProductStatusId: number;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  comment?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => InvoiceProductItems)
  invoiceProductItem: InvoiceProductItems;

  @Field(() => InvoiceProductStatuses)
  invoiceProductStatus: InvoiceProductStatuses;

  @Field(() => Users)
  user: Users;
}
