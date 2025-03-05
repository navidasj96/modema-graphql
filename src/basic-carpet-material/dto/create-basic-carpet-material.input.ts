import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetMaterialInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field()
  sortOrder: number | null;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  subproducts: Subproducts[];
}
