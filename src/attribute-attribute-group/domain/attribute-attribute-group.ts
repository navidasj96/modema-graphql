import { AttributeGroups } from './AttributeGroups';
import { Attributes } from './Attributes';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeAttributeGroup {
  @Field()
  id: number;

  @Field()
  attributeId: number;

  @Field()
  attributeGroupId: number;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  attributeGroup: AttributeGroups;

  @Field()
  attribute: Attributes;
}
