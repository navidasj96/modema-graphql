import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CarpetUsagePlaceInvoiceProduct } from './CarpetUsagePlaceInvoiceProduct';
import { CarpetUsagePlaceUser } from './CarpetUsagePlaceUser';

@ObjectType()
export class CarpetUsagePlace {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CarpetUsagePlaceInvoiceProduct])
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProduct[];

  @Field(() => [CarpetUsagePlaceUser])
  carpetUsagePlaceUsers: CarpetUsagePlaceUser[];
}
