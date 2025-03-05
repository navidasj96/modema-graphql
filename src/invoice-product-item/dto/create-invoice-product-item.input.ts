import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceProductItemInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceProductId: number;

  @Field(() => Int)
  currentStatusId: number;

  @Field(() => Int)
  row: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  padCode?: string;

  @Field({ nullable: true })
  rollReferenceCode?: string;

  @Field(() => Int, { nullable: true })
  productionRollId?: number;

  @Field({ nullable: true })
  predictedDateForReceivedByRepository?: string;

  @Field(() => Boolean, { nullable: true })
  isTagPrinted?: boolean;

  @Field(() => Boolean, { nullable: true })
  isPrintedAndHeated?: boolean;

  @Field(() => Boolean, { nullable: true })
  fromDepot?: boolean;

  @Field(() => Boolean)
  isReversed: boolean;

  @Field(() => Int, { nullable: true })
  printProfileId?: number;

  @Field(() => Int, { nullable: true })
  damageType?: number;

  @Field({ nullable: true })
  damageCause?: string;

  @Field(() => Int, { nullable: true })
  damageReasonId?: number;

  @Field(() => Boolean)
  isInsertedIntoSepidar: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  tempStatusId?: number;

  @Field(() => Int, { nullable: true })
  printRipId?: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field(() => Int, { nullable: true })
  tagSortOrder?: number;

  @Field(() => [ExitControlItems])
  exitControlItems: ExitControlItems[];

  @Field(() => [InvoiceProductItemInvoiceProductStatus])
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @Field(() => InvoiceProductStatuses)
  currentStatus: InvoiceProductStatuses;

  @Field(() => DamageReasons)
  damageReason: DamageReasons;

  @Field(() => InvoiceProducts)
  invoiceProduct: InvoiceProducts;

  @Field(() => PrintProfiles)
  printProfile: PrintProfiles;

  @Field(() => PrintRips)
  printRip: PrintRips;

  @Field(() => ProductionRolls)
  productionRoll: ProductionRolls;
}
