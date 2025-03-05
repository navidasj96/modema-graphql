import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceBankGatewayHistoryInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  invoiceId?: number;

  @Field({ nullable: true })
  refId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  saleRefId?: string;

  @Field({ nullable: true })
  amount?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  preorderRegisterId?: number;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => PreorderRegisters)
  preorderRegister: PreorderRegisters;
}
