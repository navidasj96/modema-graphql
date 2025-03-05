import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ColorCategories } from './ColorCategories';
import { Subproducts } from './Subproducts';

@Index(
  'color_category_subproduct_color_category_id_index',
  ['colorCategoryId'],
  {},
)
@Index('color_category_subproduct_idx1', ['colorCategoryId', 'subproductId'], {
  unique: true,
})
@Index('color_category_subproduct_subproduct_id_index', ['subproductId'], {})
@Entity('color_category_subproduct', { schema: 'modema' })
export class ColorCategorySubproduct {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'color_category_id', unsigned: true })
  colorCategoryId: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ColorCategories,
    (colorCategories) => colorCategories.colorCategorySubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'color_category_id', referencedColumnName: 'id' }])
  colorCategory: ColorCategories;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.colorCategorySubproducts,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproducts;
}
