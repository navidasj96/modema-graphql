import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceHistoryInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  editorUserId: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int)
  currentInvoiceStatusId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int)
  addressId: number;

  @Field(() => Float, { nullable: true })
  totalPriceOld?: number;

  @Field(() => Int, { nullable: true })
  couponId?: number;

  @Field({ nullable: true })
  invoiceNumber?: string;

  @Field({ nullable: true })
  refId?: string;

  @Field({ nullable: true })
  saleRefId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field(() => Float, { nullable: true })
  taxRate?: number;

  @Field(() => Int, { nullable: true })
  selectedShippingServiceId?: number;

  @Field(() => String, { nullable: true })
  shippingRate?: string;

  @Field(() => String, { nullable: true })
  shippingRateCod?: string;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  issueDate: Date;

  @Field(() => Int, { nullable: true })
  visitorCouponId?: number;

  @Field(() => Int, { nullable: true })
  visitorId?: number;

  @Field(() => Int, { nullable: true })
  visitorGroupId?: number;

  @Field(() => Float, { nullable: true })
  visitorCouponRate?: number;

  @Field(() => Float, { nullable: true })
  visitorRate?: number;

  @Field({ nullable: true })
  partnerCode?: string;

  @Field(() => Float, { nullable: true })
  totalVisitorShare?: number;

  @Field(() => String, { nullable: true })
  subtotalPrice?: string;

  @Field(() => String, { nullable: true })
  totalDiscount?: string;

  @Field(() => String, { nullable: true })
  totalCouponDiscount?: string;

  @Field(() => String, { nullable: true })
  totalTax?: string;

  @Field(() => String, { nullable: true })
  totalWalletCharged?: string;

  @Field(() => String, { nullable: true })
  totalPrice?: string;

  @Field(() => String)
  additions: string;

  @Field(() => Int)
  cashOnDelivery: number;

  @Field({ nullable: true })
  paymentErrorMessage?: string;

  @Field(() => Int, { nullable: true })
  invoicePaymentStatusId?: number;

  @Field(() => Int)
  freeDelivery: number;

  @Field({ nullable: true })
  trackingCode?: string;

  @Field({ nullable: true })
  deliveredDate?: Date;

  @Field({ nullable: true })
  moneyTransferRefCode?: string;

  @Field(() => Int, { nullable: true })
  packageCount?: number;

  @Field(() => Int)
  visitorShareCalculated: number;

  @Field(() => Int)
  isChaparDelivery: number;

  @Field({ nullable: true })
  chaparStatus?: string;

  @Field(() => Int, { nullable: true })
  chaparSettlementStatusId?: number;

  @Field(() => String, { nullable: true })
  crmPreOrderId?: string;

  @Field(() => String, { nullable: true })
  crmCompanyId?: string;

  @Field(() => String, { nullable: true })
  crmCompanyPersonId?: string;

  @Field(() => Boolean, { nullable: true })
  isDepot?: boolean;

  @Field(() => Boolean)
  forDigikala: boolean;

  @Field(() => Boolean)
  isForAdvertisement: boolean;

  @Field(() => Boolean)
  hasPriority: boolean;

  @Field(() => String, { nullable: true })
  replacementAdditionalPrice?: string;

  @Field(() => Int, { nullable: true })
  replacementPaymentStatusId?: number;

  @Field({ nullable: true })
  replacementPriceMoneyTransferCode?: string;

  @Field(() => Float, { nullable: true })
  digikalaSharePercent?: number;

  @Field(() => Float, { nullable: true })
  digikalaShare?: number;

  @Field(() => Int, { nullable: true })
  invoiceModeId?: number;

  @Field(() => Int, { nullable: true })
  invoiceTypeId?: number;

  @Field(() => Boolean, { nullable: true })
  paymentCreditable?: boolean;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  accountingDescription?: string;

  @Field(() => Int)
  invoiceAddressId: number;

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

  @Field(() => Int, { nullable: true })
  lockState?: number;

  @Field(() => Boolean, { nullable: true })
  moneyTransferConfirmed?: boolean;

  @Field(() => Int, { nullable: true })
  moneyTransferConfirmedBy?: number;

  @Field(() => Boolean)
  isReversible: boolean;

  @Field(() => Boolean, { nullable: true })
  useWallet?: boolean;

  @Field(() => Boolean)
  needsReview: boolean;

  @Field(() => Int, { nullable: true })
  parentInvoiceId?: number;

  @Field({ nullable: true })
  wholesaleRemainingMoneyTransferRefCode?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  editorUser: Users;

  @Field(() => InvoiceAddresses)
  invoiceAddress: InvoiceAddresses;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => [InvoicePaymentHistories])
  invoicePaymentHistories: InvoicePaymentHistories[];

  @Field(() => [InvoiceProductHistories])
  invoiceProductHistories: InvoiceProductHistories[];
}
