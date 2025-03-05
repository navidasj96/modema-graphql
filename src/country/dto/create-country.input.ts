import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCountryInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  sortName?: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  phoneCode?: number;

  @Field(() => Int, { nullable: true })
  chaparId?: number;

  @Field(() => Int, { nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Addresses])
  addresses: Addresses[];

  @Field(() => [BasicCarpetDesigners])
  basicCarpetDesigners: BasicCarpetDesigners[];

  @Field(() => [ContactForms])
  contactForms: ContactForms[];

  @Field(() => [InvoiceAddresses])
  invoiceAddresses: InvoiceAddresses[];

  @Field(() => [ReturnRequestAddresses])
  returnRequestAddresses: ReturnRequestAddresses[];

  @Field(() => [SenderInformations])
  senderInformations: SenderInformations[];

  @Field(() => [States])
  states: States[];
}
