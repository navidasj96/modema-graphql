import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CarpetUsagePlaces } from './CarpetUsagePlaces';
import { InvoiceProducts } from './InvoiceProducts';

@ObjectType()
export class CarpetUsagePlaceInvoiceProduct {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceProductId: number;

  @Field(() => Int)
  carpetUsagePlaceId: number;

  @Field(() => Int)
  row: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetUsagePlaces)
  carpetUsagePlace: CarpetUsagePlaces;

  @Field(() => InvoiceProducts)
  invoiceProduct: InvoiceProducts;
}
