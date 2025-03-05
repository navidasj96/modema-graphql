import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceProductItemInvoiceProductStatusInput {
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
