import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  stateId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  code?: string;

  @Field(() => Int, { nullable: true })
  chaparId?: number;

  @Field(() => Int, { nullable: true })
  tipaxId?: number;

  @Field({ nullable: true })
  mahexCode?: string;

  @Field(() => Int, { nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Addresses])
  addresses: Addresses[];

  @Field(() => [BasicCarpetDesigners])
  basicCarpetDesigners: BasicCarpetDesigners[];

  @Field(() => States)
  state: States;

  @Field(() => [InvoiceAddresses])
  invoiceAddresses: InvoiceAddresses[];

  @Field(() => [ReturnRequestAddresses])
  returnRequestAddresses: ReturnRequestAddresses[];

  @Field(() => [SenderInformations])
  senderInformations: SenderInformations[];
}
