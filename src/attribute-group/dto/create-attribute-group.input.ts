import { Field, InputType } from '@nestjs/graphql';
import { AttributeAttributeGroup } from '@/attribute-attribute-group/entities/attribute-attribute-group.entity';

@InputType()
export class CreateAttributeGroupInput {
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
