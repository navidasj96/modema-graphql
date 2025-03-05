import { Field, ObjectType, Int } from '@nestjs/graphql';
import { InvoicePaymentHistories } from './InvoicePaymentHistories';
import { InvoicePayments } from './InvoicePayments';
import { PreorderRegisters } from './PreorderRegisters';

@ObjectType()
export class InvoicePaymentType {
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
