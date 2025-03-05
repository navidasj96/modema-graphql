import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateExitControlItemInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  exitControlId: number;

  @Field(() => Int)
  invoiceProductItemId: number;

  @Field(() => Int)
  boxNo: number;

  @Field()
  carpetScanned: boolean;

  @Field()
  carpetPadScanned: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ExitControls)
  exitControl: ExitControls;

  @Field(() => InvoiceProductItems)
  invoiceProductItem: InvoiceProductItems;
}
