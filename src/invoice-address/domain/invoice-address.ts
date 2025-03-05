import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Addresses } from './Addresses';
import { Cities } from './Cities';
import { Countries } from './Countries';
import { Invoices } from './Invoices';
import { States } from './States';
import { Users } from './Users';
import { InvoiceHistories } from './InvoiceHistories';

@ObjectType()
export class InvoiceAddress {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int)
  addressId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  countryId: number;

  @Field(() => Int)
  stateId: number;

  @Field(() => Int)
  cityId: number;

  @Field({ nullable: true })
  fullname?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  address2?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  phone2?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  fullAddress?: string;

  @Field({ nullable: true })
  nationalId?: string;

  @Field({ nullable: true })
  crmCompanyId?: string;

  @Field({ nullable: true })
  crmCompanyPersonId?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Addresses)
  address_2: Addresses;

  @Field(() => Cities)
  city: Cities;

  @Field(() => Countries)
  country: Countries;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => States)
  state: States;

  @Field(() => Users)
  user: Users;

  @Field(() => [InvoiceHistories])
  invoiceHistories: InvoiceHistories[];
}
