import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateChaparSettlementStatusInput {
  @Field(() => Int)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Invoices])
  invoices: Invoices[];
}
