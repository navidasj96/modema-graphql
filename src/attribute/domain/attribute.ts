import { AttributeAttributeGroup } from './AttributeAttributeGroup';
import { AttributeItems } from './AttributeItems';
import { AttributeProduct } from './AttributeProduct';
import { AttributeSubproduct } from './AttributeSubproduct';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Attribute {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  type: number;

  @Field()
  sortOrder: number | null;

  @Field()
  isActive: number | null;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  attributeAttributeGroups: AttributeAttributeGroup[];

  @Field()
  attributeItems: AttributeItems[];

  @Field()
  attributeProducts: AttributeProduct[];

  @Field()
  attributeSubproducts: AttributeSubproduct[];
}
