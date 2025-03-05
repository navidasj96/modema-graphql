import { Field, ObjectType, Int } from '@nestjs/graphql';
import { InvoiceProductItems } from './InvoiceProductItems';

@ObjectType()
export class DamageReason {
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
