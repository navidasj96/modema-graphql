import { PrimaryGeneratedColumn } from 'typeorm';
import { Attributes } from './Attributes';
import { AttributeItems } from './AttributeItems';
import { Subproducts } from './Subproducts';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeSubproduct {
  @Field()
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Field()
  attributeId: number;

  @Field()
  subproductId: number;

  @Field()
  attributeItemId: number | null;

  @Field()
  value: string | null;
  @Field()
  isChecked: boolean | null;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  attribute: Attributes;

  @Field()
  attributeItem: AttributeItems;

  @Field()
  subproduct: Subproducts;
}
