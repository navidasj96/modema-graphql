import { Attributes } from '@/Attributes';
import { AttributeItems } from '@/attribute-items/entities/attribute-item.entity';
import { Products } from './Products';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeProduct {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  attributeId: number;

  @Field()
  attributeItemId: number | null;

  @Field()
  value: string | null;

  @Field()
  isChecked: boolean | null;

  @Field()
  sortOrder: number | null;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  attribute: Attributes;

  @Field()
  attributeItem: AttributeItems;

  @Field()
  product: Products;
}
