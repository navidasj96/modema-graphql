import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarpetUsagePlaceInvoiceProductInput {
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
