import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSizes } from './BasicCarpetSizes';

@Index(
  'designers_product_price_ranges_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {},
)
@Entity('designers_product_price_ranges', { schema: 'modema' })
export class DesignersProductPriceRange {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'basic_carpet_size_id', unsigned: true })
  basicCarpetSizeId: number;

  @Column('double', { name: 'min_price', precision: 22 })
  minPrice: number;

  @Column('double', { name: 'max_price', precision: 22 })
  maxPrice: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.designersProductPriceRanges,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSizes;
}
