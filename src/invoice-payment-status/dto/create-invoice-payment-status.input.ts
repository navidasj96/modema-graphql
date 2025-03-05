import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoicePaymentStatusInput {
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
