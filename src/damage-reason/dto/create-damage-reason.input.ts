import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateDamageReasonInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  department: string;

  @Field()
  cause: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoiceProductItems])
  invoiceProductItems: InvoiceProductItems[];
}
