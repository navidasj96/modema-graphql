import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeAttributeGroup } from '@/attribute-attribute-group/entities/attribute-attribute-group.entity';
import { ProductCategories } from './ProductCategories';
import { AttributeItems } from './AttributeItems';

@Index('attribute_groups_product_category_id_index', ['productCategoryId'], {})
@Entity('attribute_groups', { schema: 'modema' })
export class AttributeGroup {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', {
    name: 'product_category_id',
    nullable: true,
    unsigned: true,
  })
  productCategoryId: number | null;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'general_name', nullable: true, length: 191 })
  generalName: string | null;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => AttributeAttributeGroup,
    (attributeAttributeGroup) => attributeAttributeGroup.attributeGroup,
  )
  attributeAttributeGroups: AttributeAttributeGroup[];

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.attributeGroups,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'product_category_id', referencedColumnName: 'id' }])
  productCategory: ProductCategories;

  @OneToMany(
    () => AttributeItems,
    (attributeItems) => attributeItems.attributeGroup,
  )
  attributeItems: AttributeItems[];
}
