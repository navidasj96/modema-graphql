import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Invoices } from './Invoices';
import { Negotiations } from './Negotiations';

@ObjectType()
export class InvoiceNegotiation {
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
