import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetSizes } from './BasicCarpetSizes';
import { Discounts } from './Discounts';
import { PriceGroups } from './PriceGroups';
import { ProductCategories } from './ProductCategories';
import { Products } from './Products';
import { Subproducts } from './Subproducts';

@Index(
  'discount_subjects_basic_carpet_size_id_index',
  ['basicCarpetSizeId'],
  {},
)
@Index(
  'discount_subjects_discount_id_basic_carpet_size_id_unique',
  ['discountId', 'basicCarpetSizeId'],
  { unique: true },
)
@Index('discount_subjects_discount_id_index', ['discountId'], {})
@Index(
  'discount_subjects_discount_id_price_group_id_unique',
  ['discountId', 'priceGroupId'],
  { unique: true },
)
@Index(
  'discount_subjects_discount_id_product_category_id_unique',
  ['discountId', 'productCategoryId'],
  { unique: true },
)
@Index(
  'discount_subjects_discount_id_product_id_unique',
  ['discountId', 'productId'],
  { unique: true },
)
@Index(
  'discount_subjects_discount_id_subproduct_id_unique',
  ['discountId', 'subproductId'],
  { unique: true },
)
@Index('discount_subjects_price_group_id_index', ['priceGroupId'], {})
@Index('discount_subjects_product_category_id_index', ['productCategoryId'], {})
@Index('discount_subjects_product_id_index', ['productId'], {})
@Index('discount_subjects_subproduct_id_index', ['subproductId'], {})
@Entity('discount_subjects', { schema: 'modema' })
export class DiscountSubject {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'discount_id', unsigned: true })
  discountId: number;

  @Column('int', {
    name: 'product_category_id',
    nullable: true,
    unsigned: true,
  })
  productCategoryId?: number;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', {
    name: 'basic_carpet_size_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId?: number;

  @Column('int', { name: 'price_group_id', nullable: true, unsigned: true })
  priceGroupId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.discountSubjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_size_id', referencedColumnName: 'id' }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(() => Discounts, (discounts) => discounts.discountSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  discount: Discounts;

  @ManyToOne(() => PriceGroups, (priceGroups) => priceGroups.discountSubjects, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'price_group_id', referencedColumnName: 'id' }])
  priceGroup: PriceGroups;

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.discountSubjects,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory: ProductCategories;

  @ManyToOne(() => Products, (products) => products.discountSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.discountSubjects, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproducts;
}
