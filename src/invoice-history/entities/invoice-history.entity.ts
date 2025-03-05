import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users';
import { InvoiceAddresses } from './InvoiceAddresses';
import { Invoices } from './Invoices';
import { InvoicePaymentHistories } from './InvoicePaymentHistories';
import { InvoiceProductHistories } from './InvoiceProductHistories';

@Index('invoice_histories_editor_user_id_index', ['editorUserId'], {})
@Index('invoice_histories_invoice_address_id_index', ['invoiceAddressId'], {})
@Index('invoice_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_histories_money_transfer_confirmed_by_index',
  ['moneyTransferConfirmedBy'],
  {},
)
@Entity('invoice_histories', { schema: 'modema' })
export class InvoiceHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'editor_user_id', unsigned: true })
  editorUserId: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'current_invoice_status_id' })
  currentInvoiceStatusId: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId?: number;

  @Column('int', { name: 'address_id' })
  addressId: number;

  @Column('double', { name: 'total_price_old', nullable: true, precision: 22 })
  totalPriceOld?: number;

  @Column('int', { name: 'coupon_id', nullable: true })
  couponId?: number;

  @Column('varchar', { name: 'invoice_number', nullable: true, length: 191 })
  invoiceNumber?: string;

  @Column('varchar', { name: 'ref_id', nullable: true, length: 191 })
  refId?: string;

  @Column('varchar', { name: 'sale_ref_id', nullable: true, length: 191 })
  saleRefId?: string;

  @Column('varchar', { name: 'order_id', nullable: true, length: 191 })
  orderId?: string;

  @Column('double', { name: 'tax_rate', nullable: true, precision: 22 })
  taxRate?: number;

  @Column('int', { name: 'selected_shipping_service_id', nullable: true })
  selectedShippingServiceId?: number;

  @Column('decimal', {
    name: 'shipping_rate',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRate?: string;

  @Column('decimal', {
    name: 'shipping_rate_cod',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRateCod?: string;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'last_name', length: 191 })
  lastName: string;

  @Column('datetime', { name: 'issue_date' })
  issueDate: Date;

  @Column('int', { name: 'visitor_coupon_id', nullable: true })
  visitorCouponId?: number;

  @Column('int', { name: 'visitor_id', nullable: true })
  visitorId?: number;

  @Column('int', { name: 'visitor_group_id', nullable: true })
  visitorGroupId?: number;

  @Column('double', {
    name: 'visitor_coupon_rate',
    nullable: true,
    precision: 22,
  })
  visitorCouponRate?: number;

  @Column('double', { name: 'visitor_rate', nullable: true, precision: 22 })
  visitorRate?: number;

  @Column('varchar', { name: 'partner_code', nullable: true, length: 191 })
  partnerCode?: string;

  @Column('double', {
    name: 'total_visitor_share',
    nullable: true,
    precision: 22,
  })
  totalVisitorShare?: number;

  @Column('decimal', {
    name: 'subtotal_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  subtotalPrice?: string;

  @Column('decimal', {
    name: 'total_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount?: string;

  @Column('decimal', {
    name: 'total_coupon_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount?: string;

  @Column('decimal', {
    name: 'total_tax',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalTax?: string;

  @Column('decimal', {
    name: 'total_wallet_charged',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalWalletCharged?: string;

  @Column('decimal', {
    name: 'total_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalPrice?: string;

  @Column('decimal', {
    name: 'additions',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  additions: string;

  @Column('tinyint', { name: 'cash_on_delivery' })
  cashOnDelivery: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Users, (users) => users.invoiceHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'editor_user_id', referencedColumnName: 'id' }])
  editorUser: Users;

  @ManyToOne(
    () => InvoiceAddresses,
    (invoiceAddresses) => invoiceAddresses.invoiceHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'invoice_address_id', referencedColumnName: 'id' }])
  invoiceAddress: InvoiceAddresses;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoices;

  @OneToMany(
    () => InvoicePaymentHistories,
    (invoicePaymentHistories) => invoicePaymentHistories.invoiceHistory,
  )
  invoicePaymentHistories: InvoicePaymentHistories[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.invoiceHistory,
  )
  invoiceProductHistories: InvoiceProductHistories[];
}
