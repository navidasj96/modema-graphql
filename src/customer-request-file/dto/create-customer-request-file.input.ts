import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCustomerRequestFileInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  customerRequestId: number;

  @Field()
  path: string;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CustomerRequests)
  customerRequest: CustomerRequests;
}
