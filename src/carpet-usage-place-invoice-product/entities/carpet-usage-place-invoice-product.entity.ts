import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarpetUsagePlaces } from './CarpetUsagePlaces';
import { InvoiceProducts } from './InvoiceProducts';

@Index(
  'carpet_usage_place_invoice_product_carpet_usage_place_id_index',
  ['carpetUsagePlaceId'],
  {},
)
@Index(
  'carpet_usage_place_invoice_product_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Entity('carpet_usage_place_invoice_product', { schema: 'modema' })
export class CarpetUsagePlaceInvoiceProduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_product_id', unsigned: true })
  invoiceProductId: number;

  @Column('int', { name: 'carpet_usage_place_id', unsigned: true })
  carpetUsagePlaceId: number;

  @Column('int', { name: 'row', unsigned: true })
  row: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => CarpetUsagePlaces,
    (carpetUsagePlaces) => carpetUsagePlaces.carpetUsagePlaceInvoiceProducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'carpet_usage_place_id', referencedColumnName: 'id' }])
  carpetUsagePlace: CarpetUsagePlaces;

  @ManyToOne(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.carpetUsagePlaceInvoiceProducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProducts;
}
