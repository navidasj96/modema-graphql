import { Field, InputType } from '@nestjs/graphql';
import { Cities } from '@/entities/entities/Cities';
import { Countries } from '@/entities/entities/Countries';
import { States } from '@/entities/entities/States';
import { Users } from '@/entities/entities/Users';
import { InvoiceAddressValidationResults } from '@/entities/entities/InvoiceAddressValidationResults';
import { InvoiceAddresses } from '@/entities/entities/InvoiceAddresses';
import { InvoiceRatesResults } from '@/entities/entities/InvoiceRatesResults';
import { Invoices } from '@/entities/entities/Invoices';
import { ReturnRequestAddresses } from '@/entities/entities/ReturnRequestAddresses';

@InputType()
export class CreateAddressInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  countryId: number;

  @Field()
  stateId: number;

  @Field()
  cityId: number;

  @Field()
  fullname: string | null;

  @Field()
  zipCode: string | null;

  @Field()
  address: string;

  @Field()
  address2: string | null;

  @Field()
  phone: string | null;

  @Field()
  phone2: string | null;

  @Field()
  longitude: string | null;

  @Field()
  latitude: string | null;

  @Field()
  email: string | null;

  @Field()
  fullAddress: string | null;

  @Field()
  nationalId: string | null;

  @Field()
  crmCompanyId: string | null;

  @Field()
  crmCompanyPersonId: string | null;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  deletedAt: Date | null;

  @Field()
  oldAddress: string;

  @Field()
  sepidarId: number | null;

  @Field()
  fullnameTrimmed: string | null;

  @Field()
  fullnameDescription: string | null;

  @Field()
  city: Cities;

  @Field()
  country: Countries;

  @Field()
  state: States;

  @Field()
  user: Users;

  @Field()
  invoiceAddressValidationResults: InvoiceAddressValidationResults[];

  @Field()
  invoiceAddresses: InvoiceAddresses[];

  @Field()
  invoiceRatesResults: InvoiceRatesResults[];

  @Field()
  invoices: Invoices[];

  @Field()
  returnRequestAddresses: ReturnRequestAddresses[];
}
