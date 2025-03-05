import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Invoices } from './Invoices';

@ObjectType()
export class ChaparTrackingHistories {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  invoiceId: number;

  @Field()
  date: string;

  @Field()
  time: string;

  @Field()
  status: string;

  @Field()
  statusNote: string;

  @Field()
  tracking: string;

  @Field()
  reference: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Invoices)
  invoice: Invoices;
}
