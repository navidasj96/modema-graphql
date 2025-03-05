import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceNegotiationInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  negotiationId: number;

  @Field(() => Int)
  invoiceId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => Negotiations)
  negotiation: Negotiations;
}
