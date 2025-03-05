import { BasicCarpetSizes } from './BasicCarpetSizes';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BasicCarpetSizeDetail {
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
