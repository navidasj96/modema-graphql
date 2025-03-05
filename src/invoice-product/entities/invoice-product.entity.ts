import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceProductItems } from './InvoiceProductItems';
import { Designs } from './Designs';
import { Discounts } from './Discounts';
import { Invoices } from './Invoices';
import { Subproducts } from './Subproducts';
import { Products } from './Products';

@Index('invoice_products_design_id_index', ['designId'], {})
@Index('invoice_products_discount_id_index', ['discountId'], {})
@Index(
  'invoice_products_idx1_unique',
  ['invoiceId', 'subproductId', 'withPad', 'padId'],
  { unique: true },
)
@Index('invoice_products_invoice_id_index', ['invoiceId'], {})
@Index('invoice_products_pad_id_index', ['padId'], {})
@Index('invoice_products_product_id_index', ['productId'], {})
@Index('invoice_products_related_product_id_index', ['relatedProductId'], {})
@Index(
  'invoice_products_related_subproduct_id_index',
  ['relatedSubproductId'],
  {},
)
@Index('invoice_products_subproduct_id_index', ['subproductId'], {})
@Entity('invoice_products', { schema: 'modema' })
export class InvoiceProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'design_id', nullable: true, unsigned: true })
  designId?: number;

  @Column('int', { name: 'discount_id', nullable: true, unsigned: true })
  discountId?: number;

  @Column('double', {
    name: 'width',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  width?: number;

  @Column('double', {
    name: 'length',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  length?: number;

  @Column('double', {
    name: 'price_per_inch',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  pricePerInch?: number;

  @Column('decimal', { name: 'price', precision: 18, scale: 2 })
  price: string;

  @Column('decimal', {
    name: 'bundle_price',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  bundlePrice: string;

  @Column('decimal', {
    name: 'discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  discount?: string;

  @Column('smallint', { name: 'count', unsigned: true })
  count: number;

  @Column('smallint', { name: 'bundle_count', default: () => "'0'" })
  bundleCount: number;

  @Column('double', {
    name: 'total_price',
    nullable: true,
    unsigned: true,
    precision: 14,
    scale: 2,
  })
  totalPrice?: number;

  @Column('decimal', {
    name: 'total_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount?: string;

  @Column('tinyint', {
    name: 'is_coupon_applicable',
    width: 1,
    default: () => "'0'",
  })
  isCouponApplicable: boolean;

  @Column('decimal', {
    name: 'total_coupon_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount?: string;

  @Column('double', {
    name: 'designer_price_percentage',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  designerPricePercentage?: number;

  @Column('double', {
    name: 'designer_price_share',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  designerPriceShare?: number;

  @Column('tinyint', { name: 'with_pad', width: 1, default: () => "'0'" })
  withPad: boolean;

  @Column('int', { name: 'pad_id', nullable: true, unsigned: true })
  padId?: number;

  @Column('int', { name: 'related_product_id', nullable: true, unsigned: true })
  relatedProductId?: number;

  @Column('int', {
    name: 'related_subproduct_id',
    nullable: true,
    unsigned: true,
  })
  relatedSubproductId?: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Designs, (designs) => designs.invoiceProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'design_id', referencedColumnName: 'id' }])
  design?: Designs;

  @ManyToOne(() => Discounts, (discounts) => discounts.invoiceProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  discount_2?: Discounts;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoices;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.invoiceProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'pad_id', referencedColumnName: 'id' }])
  pad?: Subproducts;

  @ManyToOne(() => Products, (products) => products.invoiceProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product?: Products;

  @ManyToOne(() => Products, (products) => products.invoiceProducts2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'related_product_id', referencedColumnName: 'id' }])
  relatedProduct?: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.invoiceProducts2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'related_subproduct_id', referencedColumnName: 'id' }])
  relatedSubproduct?: Subproducts;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.invoiceProducts3, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct?: Subproducts;

  @OneToMany(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.invoiceProduct,
  )
  invoiceProductItems: InvoiceProductItems[];
}
