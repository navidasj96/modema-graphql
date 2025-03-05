import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Invoices } from './Invoices';

@ObjectType()
export class InvoiceMode {
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
