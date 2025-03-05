import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Invoices } from './Invoices';

@ObjectType()
export class InvoicePaymentStatus {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Invoices])
  invoices: Invoices[];

  @Field(() => [Invoices])
  invoices2: Invoices[];
}
