import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Addresses } from './Addresses';
import { BasicCarpetDesigners } from './BasicCarpetDesigners';
import { ContactForms } from './ContactForms';
import { InvoiceAddresses } from './InvoiceAddresses';
import { ReturnRequestAddresses } from './ReturnRequestAddresses';
import { SenderInformations } from './SenderInformations';
import { States } from './States';

@ObjectType()
export class Country {
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
