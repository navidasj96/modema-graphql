import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Attributes } from '@/Attributes';
import { AttributeItems } from '@/attribute-items/entities/attribute-item.entity';
import { Products } from './Products';
import { Field, ObjectType } from '@nestjs/graphql';

@Index('attribute_product_attribute_id_index', ['attributeId'], {})
@Index('attribute_product_attribute_item_id_index', ['attributeItemId'], {})
@Index(
  'attribute_product_product_id_attribute_id_unique',
  ['productId', 'attributeId'],
  { unique: true },
)
@Index('attribute_product_product_id_index', ['productId'], {})
@Entity('attribute_product', { schema: 'modema' })
@ObjectType()
export class AttributeProduct {
  @Field()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Field()
  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Field()
  @Column('int', { name: 'attribute_id', unsigned: true })
  attributeId: number;

  @Field()
  @Column('int', { name: 'attribute_item_id', nullable: true, unsigned: true })
  attributeItemId: number | null;

  @Field()
  @Column('text', { name: 'value', nullable: true })
  value: string | null;

  @Field()
  @Column('tinyint', { name: 'is_checked', nullable: true, width: 1 })
  isChecked: boolean | null;

  @Field()
  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder: number | null;

  @Field()
  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Field()
  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Field()
  @ManyToOne(() => Attributes, (attributes) => attributes.attributeProducts, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'attribute_id', referencedColumnName: 'id' }])
  attribute: Attributes;

  @Field()
  @ManyToOne(
    () => AttributeItems,
    (attributeItems) => attributeItems.attributeProducts,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'attribute_item_id', referencedColumnName: 'id' }])
  attributeItem: AttributeItems;

  @Field()
  @ManyToOne(() => Products, (products) => products.attributeProducts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Products;
}
