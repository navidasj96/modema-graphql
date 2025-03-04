import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AttributeGroups } from '@/attribute-groups/entities/attribute-group.entity';
import { Attributes } from './Attributes';
import { AttributeProduct } from './AttributeProduct';
import { AttributeSubproduct } from './AttributeSubproduct';
import { Field, ObjectType } from '@nestjs/graphql';

@Index('attribute_group_id', ['attributeGroupId'], {})
@Index('attribute_items_attribute_id_index', ['attributeId'], {})
@Entity('attribute_items', { schema: 'modema' })
@ObjectType()
export class AttributeItems {
  @Field()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;
  @Field()
  @Column('int', { name: 'attribute_id', unsigned: true })
  attributeId: number;
  @Field()
  @Column('int', { name: 'attribute_group_id', nullable: true, unsigned: true })
  attributeGroupId: number | null;
  @Field()
  @Column('varchar', { name: 'name', length: 191 })
  name: string;
  @Field()
  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;
  @Field()
  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
  @Field()
  @ManyToOne(
    () => AttributeGroups,
    (attributeGroups) => attributeGroups.attributeItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'attribute_group_id', referencedColumnName: 'id' }])
  attributeGroup: AttributeGroups;
  @Field()
  @ManyToOne(() => Attributes, (attributes) => attributes.attributeItems, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'attribute_id', referencedColumnName: 'id' }])
  attribute: Attributes;

  @Field()
  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.attributeItem,
  )
  attributeProducts: AttributeProduct[];
  @Field()
  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.attributeItem,
  )
  attributeSubproducts: AttributeSubproduct[];
}
