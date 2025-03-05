import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetSizeDetailInput {
  @Field()
  id: number;
  basicCarpetSizeId: number | null;

  @Field()
  title: string | null;

  @Field()
  detailText: string | null;

  @Field()
  sortOrder: number | null;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date | null;

  @Field()
  updatedAt: Date | null;

  @Field()
  titleEn: string | null;

  @Field()
  detailTextEn: string | null;

  @Field()
  basicCarpetSize: BasicCarpetSizes;
}
