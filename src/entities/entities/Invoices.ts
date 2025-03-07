import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ChaparTrackingHistories } from "./ChaparTrackingHistories";
import { Coupons } from "./Coupons";
import { InvoiceAddressValidationResults } from "./InvoiceAddressValidationResults";
import { InvoiceAddresses } from "./InvoiceAddresses";
import { InvoiceBankGatewayHistories } from "./InvoiceBankGatewayHistories";
import { InvoiceHistories } from "./InvoiceHistories";
import { InvoiceInvoiceStatus } from "./InvoiceInvoiceStatus";
import { InvoiceNegotiation } from "./InvoiceNegotiation";
import { InvoicePaymentHistories } from "./InvoicePaymentHistories";
import { InvoicePayments } from "./InvoicePayments";
import { InvoiceProductHistories } from "./InvoiceProductHistories";
import { InvoiceProducts } from "./InvoiceProducts";
import { InvoiceRatesResults } from "./InvoiceRatesResults";
import { InvoiceReversals } from "./InvoiceReversals";
import { InvoiceShippingRates } from "./InvoiceShippingRates";
import { Addresses } from "./Addresses";
import { ChaparSettlementStatuses } from "./ChaparSettlementStatuses";
import { InvoiceStatuses } from "./InvoiceStatuses";
import { InvoiceModes } from "./InvoiceModes";
import { InvoicePaymentStatuses } from "./InvoicePaymentStatuses";
import { InvoiceTypes } from "./InvoiceTypes";
import { Users } from "./Users";
import { VisitorCoupons } from "./VisitorCoupons";
import { VisitorGroups } from "./VisitorGroups";
import { Visitors } from "./Visitors";
import { PaymentMethodFields } from "./PaymentMethodFields";
import { ReturnRequestHistories } from "./ReturnRequestHistories";
import { ReturnRequests } from "./ReturnRequests";
import { ReturnedInvoices } from "./ReturnedInvoices";

@Index("invoice_number", ["invoiceNumber"], { unique: true })
@Index("invoices_address_id_index", ["addressId"], {})
@Index(
  "invoices_chapar_settlement_status_id_index",
  ["chaparSettlementStatusId"],
  {}
)
@Index("invoices_coupon_id_index", ["couponId"], {})
@Index("invoices_crm_company_id_index", ["crmCompanyId"], {})
@Index("invoices_crm_company_person_id_index", ["crmCompanyPersonId"], {})
@Index("invoices_crm_pre_order_id_index", ["crmPreOrderId"], {})
@Index(
  "invoices_current_invoice_status_id_index",
  ["currentInvoiceStatusId"],
  {}
)
@Index("invoices_invoice_mode_id_index", ["invoiceModeId"], {})
@Index(
  "invoices_invoice_payment_status_id_index",
  ["invoicePaymentStatusId"],
  {}
)
@Index("invoices_invoice_type_id_index", ["invoiceTypeId"], {})
@Index("invoices_lock_state_foreign", ["lockState"], {})
@Index("invoices_mah_index", ["mah"], {})
@Index(
  "invoices_money_transfer_confirmed_by_index",
  ["moneyTransferConfirmedBy"],
  {}
)
@Index("invoices_parent_invoice_id_index", ["parentInvoiceId"], {})
@Index(
  "invoices_replacement_payment_status_id_index",
  ["replacementPaymentStatusId"],
  {}
)
@Index("invoices_roz_index", ["roz"], {})
@Index("invoices_sal_index", ["sal"], {})
@Index("invoices_user_id_index", ["userId"], {})
@Index("invoices_visitor_coupon_id_index", ["visitorCouponId"], {})
@Index("invoices_visitor_group_id_index", ["visitorGroupId"], {})
@Index("invoices_visitor_id_index", ["visitorId"], {})
@Index("issue_date", ["issueDate"], {})
@Entity("invoices", { schema: "modema" })
export class Invoices {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "current_invoice_status_id", unsigned: true })
  currentInvoiceStatusId: number;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @Column("int", { name: "coupon_id", nullable: true, unsigned: true })
  couponId: number | null;

  @Column("varchar", {
    name: "invoice_number",
    nullable: true,
    unique: true,
    length: 191,
  })
  invoiceNumber: string | null;

  @Column("varchar", { name: "ref_id", nullable: true, length: 191 })
  refId: string | null;

  @Column("varchar", { name: "sale_ref_id", nullable: true, length: 191 })
  saleRefId: string | null;

  @Column("varchar", { name: "order_id", nullable: true, length: 191 })
  orderId: string | null;

  @Column("double", {
    name: "tax_rate",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  taxRate: number | null;

  @Column("int", {
    name: "selected_shipping_service_id",
    nullable: true,
    default: () => "'0'",
  })
  selectedShippingServiceId: number | null;

  @Column("decimal", {
    name: "shipping_rate",
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  shippingRate: string | null;

  @Column("decimal", {
    name: "shipping_rate_cod",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRateCod: string | null;

  @Column("double", {
    name: "paid_cod_shipping_rate",
    precision: 22,
    default: () => "'0'",
  })
  paidCodShippingRate: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "last_name", length: 191 })
  lastName: string;

  @Column("datetime", { name: "issue_date" })
  issueDate: Date;

  @Column("int", { name: "visitor_coupon_id", nullable: true, unsigned: true })
  visitorCouponId: number | null;

  @Column("int", { name: "visitor_id", nullable: true, unsigned: true })
  visitorId: number | null;

  @Column("int", { name: "visitor_group_id", nullable: true, unsigned: true })
  visitorGroupId: number | null;

  @Column("double", {
    name: "visitor_coupon_rate",
    nullable: true,
    precision: 22,
  })
  visitorCouponRate: number | null;

  @Column("double", { name: "visitor_rate", nullable: true, precision: 22 })
  visitorRate: number | null;

  @Column("varchar", {
    name: "partner_code",
    comment: "Code Moarref(Baraye Foroshgahhaye Hamkar)",
    length: 191,
  })
  partnerCode: string;

  @Column("double", {
    name: "total_visitor_share",
    nullable: true,
    precision: 22,
  })
  totalVisitorShare: number | null;

  @Column("decimal", {
    name: "subtotal_price",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  subtotalPrice: string | null;

  @Column("decimal", {
    name: "total_discount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount: string | null;

  @Column("decimal", {
    name: "total_coupon_discount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount: string | null;

  @Column("decimal", {
    name: "total_tax",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalTax: string | null;

  @Column("decimal", {
    name: "total_wallet_charged",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalWalletCharged: string | null;

  @Column("decimal", {
    name: "total_price",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalPrice: string | null;

  @Column("decimal", {
    name: "additions",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  additions: string;

  @Column("tinyint", {
    name: "cash_on_delivery",
    width: 1,
    default: () => "'0'",
  })
  cashOnDelivery: boolean;

  @Column("varchar", {
    name: "payment_error_message",
    nullable: true,
    length: 191,
  })
  paymentErrorMessage: string | null;

  @Column("int", {
    name: "invoice_payment_status_id",
    nullable: true,
    unsigned: true,
  })
  invoicePaymentStatusId: number | null;

  @Column("tinyint", { name: "free_delivery", width: 1, default: () => "'1'" })
  freeDelivery: boolean;

  @Column("varchar", { name: "tracking_code", nullable: true, length: 191 })
  trackingCode: string | null;

  @Column("datetime", { name: "delivered_date", nullable: true })
  deliveredDate: Date | null;

  @Column("varchar", {
    name: "money_transfer_ref_code",
    nullable: true,
    length: 191,
  })
  moneyTransferRefCode: string | null;

  @Column("int", { name: "package_count", nullable: true })
  packageCount: number | null;

  @Column("tinyint", {
    name: "visitor_share_calculated",
    width: 1,
    default: () => "'0'",
  })
  visitorShareCalculated: boolean;

  @Column("tinyint", {
    name: "is_chapar_delivery",
    width: 1,
    default: () => "'1'",
  })
  isChaparDelivery: boolean;

  @Column("varchar", { name: "chapar_status", nullable: true, length: 191 })
  chaparStatus: string | null;

  @Column("int", {
    name: "chapar_settlement_status_id",
    nullable: true,
    unsigned: true,
  })
  chaparSettlementStatusId: number | null;

  @Column("bigint", {
    name: "crm_pre_order_id",
    nullable: true,
    unsigned: true,
  })
  crmPreOrderId: string | null;

  @Column("bigint", { name: "crm_company_id", nullable: true, unsigned: true })
  crmCompanyId: string | null;

  @Column("bigint", {
    name: "crm_company_person_id",
    nullable: true,
    unsigned: true,
  })
  crmCompanyPersonId: string | null;

  @Column("tinyint", { name: "is_depot", width: 1, default: () => "'0'" })
  isDepot: boolean;

  @Column("tinyint", { name: "for_digikala", width: 1, default: () => "'0'" })
  forDigikala: boolean;

  @Column("tinyint", {
    name: "is_for_advertisement",
    width: 1,
    default: () => "'0'",
  })
  isForAdvertisement: boolean;

  @Column("tinyint", { name: "has_priority", width: 1, default: () => "'0'" })
  hasPriority: boolean;

  @Column("decimal", {
    name: "replacement_additional_price",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  replacementAdditionalPrice: string;

  @Column("int", {
    name: "replacement_payment_status_id",
    nullable: true,
    unsigned: true,
  })
  replacementPaymentStatusId: number | null;

  @Column("varchar", {
    name: "replacement_price_money_transfer_code",
    nullable: true,
    length: 191,
  })
  replacementPriceMoneyTransferCode: string | null;

  @Column("double", {
    name: "digikala_share_percent",
    nullable: true,
    precision: 22,
  })
  digikalaSharePercent: number | null;

  @Column("double", { name: "digikala_share", nullable: true, precision: 22 })
  digikalaShare: number | null;

  @Column("int", { name: "invoice_mode_id", nullable: true, unsigned: true })
  invoiceModeId: number | null;

  @Column("int", { name: "invoice_type_id", nullable: true, unsigned: true })
  invoiceTypeId: number | null;

  @Column("tinyint", {
    name: "payment_creditable",
    width: 1,
    default: () => "'0'",
  })
  paymentCreditable: boolean;

  @Column("varchar", {
    name: "wholesale_remaining_money_transfer_ref_code",
    nullable: true,
    length: 191,
  })
  wholesaleRemainingMoneyTransferRefCode: string | null;

  @Column("int", { name: "parent_invoice_id", nullable: true, unsigned: true })
  parentInvoiceId: number | null;

  @Column("int", { name: "lock_state", nullable: true, unsigned: true })
  lockState: number | null;

  @Column("text", { name: "lock_state_description", nullable: true })
  lockStateDescription: string | null;

  @Column("tinyint", {
    name: "money_transfer_confirmed",
    nullable: true,
    width: 1,
  })
  moneyTransferConfirmed: boolean | null;

  @Column("int", {
    name: "money_transfer_confirmed_by",
    nullable: true,
    unsigned: true,
  })
  moneyTransferConfirmedBy: number | null;

  @Column("tinyint", { name: "is_reversible", width: 1, default: () => "'0'" })
  isReversible: boolean;

  @Column("tinyint", { name: "use_wallet", width: 1, default: () => "'0'" })
  useWallet: boolean;

  @Column("tinyint", { name: "needs_review", width: 1, default: () => "'0'" })
  needsReview: boolean;

  @Column("tinyint", {
    name: "contains_pads_only",
    width: 1,
    default: () => "'0'",
  })
  containsPadsOnly: boolean;

  @Column("date", { name: "deadline_date", nullable: true })
  deadlineDate: string | null;

  @Column("date", { name: "deadline_date_old", nullable: true })
  deadlineDateOld: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "accounting_description", nullable: true })
  accountingDescription: string | null;

  @Column("int", { name: "address_id", unsigned: true })
  addressId: number;

  @Column("varchar", { name: "shipment_uuid", nullable: true, length: 191 })
  shipmentUuid: string | null;

  @Column("double", { name: "total_price_old", nullable: true, precision: 22 })
  totalPriceOld: number | null;

  @Column("int", { name: "sepidar_id", nullable: true })
  sepidarId: number | null;

  @Column("int", { name: "sepidar_code", nullable: true })
  sepidarCode: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("datetime", { name: "seen_at", nullable: true })
  seenAt: Date | null;

  @Column("tinyint", { name: "can_return", width: 1, default: () => "'0'" })
  canReturn: boolean;

  @Column("smallint", { name: "sal", nullable: true, unsigned: true })
  sal: number | null;

  @Column("tinyint", { name: "mah", nullable: true, unsigned: true })
  mah: number | null;

  @Column("tinyint", { name: "roz", nullable: true, unsigned: true })
  roz: number | null;

  @OneToMany(
    () => ChaparTrackingHistories,
    (chaparTrackingHistories) => chaparTrackingHistories.invoice
  )
  chaparTrackingHistories: ChaparTrackingHistories[];

  @OneToMany(() => Coupons, (coupons) => coupons.retargetingInvoice)
  coupons: Coupons[];

  @OneToMany(
    () => InvoiceAddressValidationResults,
    (invoiceAddressValidationResults) => invoiceAddressValidationResults.invoice
  )
  invoiceAddressValidationResults: InvoiceAddressValidationResults[];

  @OneToMany(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.invoice
  )
  invoiceAddresses: InvoiceAddresses[];

  @OneToMany(
    () => InvoiceBankGatewayHistories,
    (invoiceBankGatewayHistories) => invoiceBankGatewayHistories.invoice
  )
  invoiceBankGatewayHistories: InvoiceBankGatewayHistories[];

  @OneToMany(
    () => InvoiceHistories,
    (invoiceHistories) => invoiceHistories.invoice
  )
  invoiceHistories: InvoiceHistories[];

  @OneToMany(
    () => InvoiceInvoiceStatus,
    (invoiceInvoiceStatus) => invoiceInvoiceStatus.invoice
  )
  invoiceInvoiceStatuses: InvoiceInvoiceStatus[];

  @OneToMany(
    () => InvoiceNegotiation,
    (invoiceNegotiation) => invoiceNegotiation.invoice
  )
  invoiceNegotiations: InvoiceNegotiation[];

  @OneToMany(
    () => InvoicePaymentHistories,
    (invoicePaymentHistories) => invoicePaymentHistories.invoice
  )
  invoicePaymentHistories: InvoicePaymentHistories[];

  @OneToMany(
    () => InvoicePayments,
    (invoicePayments) => invoicePayments.invoice
  )
  invoicePayments: InvoicePayments[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.invoice
  )
  invoiceProductHistories: InvoiceProductHistories[];

  @OneToMany(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.invoice
  )
  invoiceProducts: InvoiceProducts[];

  @OneToMany(
    () => InvoiceRatesResults,
    (invoiceRatesResults) => invoiceRatesResults.invoice
  )
  invoiceRatesResults: InvoiceRatesResults[];

  @OneToMany(
    () => InvoiceReversals,
    (invoiceReversals) => invoiceReversals.invoice
  )
  invoiceReversals: InvoiceReversals[];

  @OneToMany(
    () => InvoiceShippingRates,
    (invoiceShippingRates) => invoiceShippingRates.invoice
  )
  invoiceShippingRates: InvoiceShippingRates[];

  @ManyToOne(() => Addresses, (addresses) => addresses.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "address_id", referencedColumnName: "id" }])
  address: Addresses;

  @ManyToOne(
    () => ChaparSettlementStatuses,
    (chaparSettlementStatuses) => chaparSettlementStatuses.invoices,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "chapar_settlement_status_id", referencedColumnName: "id" },
  ])
  chaparSettlementStatus: ChaparSettlementStatuses;

  @ManyToOne(() => Coupons, (coupons) => coupons.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "coupon_id", referencedColumnName: "id" }])
  coupon: Coupons;

  @ManyToOne(
    () => InvoiceStatuses,
    (invoiceStatuses) => invoiceStatuses.invoices,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "current_invoice_status_id", referencedColumnName: "id" },
  ])
  currentInvoiceStatus: InvoiceStatuses;

  @ManyToOne(() => InvoiceModes, (invoiceModes) => invoiceModes.invoices, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_mode_id", referencedColumnName: "id" }])
  invoiceMode: InvoiceModes;

  @ManyToOne(
    () => InvoicePaymentStatuses,
    (invoicePaymentStatuses) => invoicePaymentStatuses.invoices,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "invoice_payment_status_id", referencedColumnName: "id" },
  ])
  invoicePaymentStatus: InvoicePaymentStatuses;

  @ManyToOne(() => InvoiceTypes, (invoiceTypes) => invoiceTypes.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_type_id", referencedColumnName: "id" }])
  invoiceType: InvoiceTypes;

  @ManyToOne(
    () => InvoiceStatuses,
    (invoiceStatuses) => invoiceStatuses.invoices2,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "lock_state", referencedColumnName: "id" }])
  lockState2: InvoiceStatuses;

  @ManyToOne(() => Users, (users) => users.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "money_transfer_confirmed_by", referencedColumnName: "id" },
  ])
  moneyTransferConfirmedBy2: Users;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "parent_invoice_id", referencedColumnName: "id" }])
  parentInvoice: Invoices;

  @OneToMany(() => Invoices, (invoices) => invoices.parentInvoice)
  invoices: Invoices[];

  @ManyToOne(
    () => InvoicePaymentStatuses,
    (invoicePaymentStatuses) => invoicePaymentStatuses.invoices2,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "replacement_payment_status_id", referencedColumnName: "id" },
  ])
  replacementPaymentStatus: InvoicePaymentStatuses;

  @ManyToOne(() => Users, (users) => users.invoices2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(
    () => VisitorCoupons,
    (visitorCoupons) => visitorCoupons.invoices,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "visitor_coupon_id", referencedColumnName: "id" }])
  visitorCoupon: VisitorCoupons;

  @ManyToOne(() => VisitorGroups, (visitorGroups) => visitorGroups.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "visitor_group_id", referencedColumnName: "id" }])
  visitorGroup: VisitorGroups;

  @ManyToOne(() => Visitors, (visitors) => visitors.invoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "visitor_id", referencedColumnName: "id" }])
  visitor: Visitors;

  @OneToMany(
    () => PaymentMethodFields,
    (paymentMethodFields) => paymentMethodFields.invoice
  )
  paymentMethodFields: PaymentMethodFields[];

  @OneToMany(
    () => ReturnRequestHistories,
    (returnRequestHistories) => returnRequestHistories.invoice
  )
  returnRequestHistories: ReturnRequestHistories[];

  @OneToMany(() => ReturnRequests, (returnRequests) => returnRequests.invoice)
  returnRequests: ReturnRequests[];

  @OneToMany(
    () => ReturnedInvoices,
    (returnedInvoices) => returnedInvoices.invoice
  )
  returnedInvoices: ReturnedInvoices[];

  @OneToMany(
    () => ReturnedInvoices,
    (returnedInvoices) => returnedInvoices.replacementInvoice
  )
  returnedInvoices2: ReturnedInvoices[];
}
