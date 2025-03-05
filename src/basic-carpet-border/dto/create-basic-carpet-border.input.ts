import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetBorderInput {
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
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  subproducts: Subproducts[];
}
