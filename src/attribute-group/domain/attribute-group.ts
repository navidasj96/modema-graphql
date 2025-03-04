import { AttributeAttributeGroup } from '@/attribute-attribute-group/entities/attribute-attribute-group.entity';
import { ProductCategories } from './ProductCategories';
import { AttributeItems } from './AttributeItems';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeGroup {
  @Field()
  id: number;

  @Field()
  productCategoryId: number | null;

  @Field()
  name: string;

  @Field()
  generalName: string | null;

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
  productCategory: ProductCategories;

  @Field()
  attributeItems: AttributeItems[];
}
