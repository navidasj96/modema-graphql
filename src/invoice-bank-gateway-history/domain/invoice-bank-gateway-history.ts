import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Invoices } from './Invoices';
import { PreorderRegisters } from './PreorderRegisters';

@ObjectType()
export class InvoiceBankGatewayHistory {
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
