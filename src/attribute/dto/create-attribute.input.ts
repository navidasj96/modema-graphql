import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttributeInput {
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
