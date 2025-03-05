import { Field, ObjectType, Int } from '@nestjs/graphql';
import { ExitControls } from './ExitControls';
import { InvoiceProductItems } from './InvoiceProductItems';

@ObjectType()
export class ExitControlItem {
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
