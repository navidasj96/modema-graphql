import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeAttributeGroup } from './AttributeAttributeGroup';
import { AttributeItems } from './AttributeItems';
import { AttributeProduct } from './AttributeProduct';
import { AttributeSubproduct } from './AttributeSubproduct';
import { Field, ObjectType } from '@nestjs/graphql';

@Index('attributes_name_unique', ['name'], { unique: true })
@Entity('attributes', { schema: 'modema' })
@ObjectType()
export class Attributes {
  @Field()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Field()
  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Field()
  @Column('int', {
    name: 'type',
    comment: '0=>text,1=>boolean,2=>select',
    default: () => "'0'",
  })
  type: number;

  @Field()
  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder: number | null;

  @Field()
  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Field()
  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Field()
  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Field()
  @OneToMany(
    () => AttributeAttributeGroup,
    (attributeAttributeGroup) => attributeAttributeGroup.attribute,
  )
  attributeAttributeGroups: AttributeAttributeGroup[];

  @Field()
  @OneToMany(() => AttributeItems, (attributeItems) => attributeItems.attribute)
  attributeItems: AttributeItems[];

  @Field()
  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.attribute,
  )
  attributeProducts: AttributeProduct[];

  @Field()
  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.attribute,
  )
  attributeSubproducts: AttributeSubproduct[];
}
