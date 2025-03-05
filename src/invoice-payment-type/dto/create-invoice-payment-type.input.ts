import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoicePaymentTypeInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePaymentHistories])
  invoicePaymentHistories: InvoicePaymentHistories[];

  @Field(() => [InvoicePayments])
  invoicePayments: InvoicePayments[];

  @Field(() => [PreorderRegisters])
  preorderRegisters: PreorderRegisters[];
}
