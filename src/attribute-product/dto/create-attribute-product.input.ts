import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAttributeProductInput {
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
