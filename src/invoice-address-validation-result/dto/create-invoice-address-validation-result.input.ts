import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceAddressValidationResultInput {
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
