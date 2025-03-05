import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCustomerRequestInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  uuid?: string;

  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CustomerRequestFiles])
  customerRequestFiles: CustomerRequestFiles[];

  @Field(() => Users)
  user: Users;
}
