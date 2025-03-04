import { AttributeGroups } from '@/attribute-groups/entities/attribute-group.entity';
import { Attributes } from './Attributes';
import { AttributeProduct } from './AttributeProduct';
import { AttributeSubproduct } from './AttributeSubproduct';
import { Field, ObjectType } from '@nestjs/graphql';

ObjectType();

export class AttributeItem {
  @Field()
  id: number;

  @Field()
  attributeId: number;

  @Field()
  attributeGroupId: number | null;

  @Field()
  name: string;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  attributeGroup: AttributeGroups;

  @Field()
  attribute: Attributes;

  @Field()
  attributeProducts: AttributeProduct[];

  @Field()
  attributeSubproducts: AttributeSubproduct[];
}
