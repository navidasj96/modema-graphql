import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceModeInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Invoices])
  invoices: Invoices[];
}
