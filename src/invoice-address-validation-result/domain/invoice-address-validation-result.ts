import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Addresses } from './Addresses';
import { Invoices } from './Invoices';

@ObjectType()
export class InvoiceAddressValidationResult {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int)
  addressId: number;

  @Field()
  addressValidationResult: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Addresses)
  address: Addresses;

  @Field(() => Invoices)
  invoice: Invoices;
}
