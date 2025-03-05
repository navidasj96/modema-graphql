import { Subproducts } from './Subproducts';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BasicCarpetMaterial {
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
