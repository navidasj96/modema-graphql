import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceProductInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceId: number;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => Int, { nullable: true })
  subproductId?: number;

  @Field(() => Int, { nullable: true })
  designId?: number;

  @Field(() => Int, { nullable: true })
  discountId?: number;

  @Field(() => Float, { nullable: true })
  width?: number;

  @Field(() => Float, { nullable: true })
  length?: number;

  @Field(() => Float, { nullable: true })
  pricePerInch?: number;

  @Field()
  price: string;

  @Field()
  bundlePrice: string;

  @Field({ nullable: true })
  discount?: string;

  @Field(() => Int)
  count: number;

  @Field(() => Int)
  bundleCount: number;

  @Field(() => Float, { nullable: true })
  totalPrice?: number;

  @Field({ nullable: true })
  totalDiscount?: string;

  @Field(() => Boolean)
  isCouponApplicable: boolean;

  @Field({ nullable: true })
  totalCouponDiscount?: string;

  @Field(() => Float, { nullable: true })
  designerPricePercentage?: number;

  @Field(() => Float, { nullable: true })
  designerPriceShare?: number;

  @Field(() => Boolean)
  withPad: boolean;

  @Field(() => Int, { nullable: true })
  padId?: number;

  @Field(() => Int, { nullable: true })
  relatedProductId?: number;

  @Field(() => Int, { nullable: true })
  relatedSubproductId?: number;

  @Field(() => Boolean)
  invoiceProductItemsCreated: boolean;

  @Field(() => Int, { nullable: true })
  itemsToProduce?: number;

  @Field(() => Int, { nullable: true })
  itemsFromDepot?: number;

  @Field(() => Int, { nullable: true })
  stockCount?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Boolean)
  tempDepotItemsCreated: boolean;

  @Field(() => Int, { nullable: true })
  sepidarId?: number;

  @Field(() => Int)
  gift: number;

  @Field(() => Boolean)
  manuallyAdded: boolean;

  @Field(() => [CarpetUsagePlaceInvoiceProduct])
  carpetUsagePlaceInvoiceProducts: CarpetUsagePlaceInvoiceProduct[];

  @Field(() => [InvoiceProductHistories])
  invoiceProductHistories: InvoiceProductHistories[];

  @Field(() => [InvoiceProductItems])
  invoiceProductItems: InvoiceProductItems[];

  @Field(() => Designs)
  design: Designs;

  @Field(() => Discounts)
  discount_2: Discounts;

  @Field(() => Invoices)
  invoice: Invoices;

  @Field(() => Subproducts)
  pad: Subproducts;

  @Field(() => Products)
  product: Products;

  @Field(() => Products)
  relatedProduct: Products;

  @Field(() => Subproducts)
  relatedSubproduct: Subproducts;

  @Field(() => Subproducts)
  subproduct: Subproducts;

  @Field(() => [InvoiceReversalItems])
  invoiceReversalItems: InvoiceReversalItems[];

  @Field(() => [ReturnRequestItemHistories])
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @Field(() => [ReturnRequestItems])
  returnRequestItems: ReturnRequestItems[];

  @Field(() => [ReturnedInvoiceProducts])
  returnedInvoiceProducts: ReturnedInvoiceProducts[];

  @Field(() => [SubproductStockHistories])
  subproductStockHistories: SubproductStockHistories[];
}
