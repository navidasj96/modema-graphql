import { Column, Entity } from 'typeorm';

@Entity('export_products', { schema: 'modema' })
export class ExportProduct {
  @Column('bigint', { name: 'product_id', default: () => "'0'" })
  productId: string;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('double', { name: 'price', nullable: true, precision: 14, scale: 2 })
  price?: number;
}
