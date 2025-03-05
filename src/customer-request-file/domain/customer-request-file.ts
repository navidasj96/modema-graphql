import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CustomerRequests } from './CustomerRequests';

@ObjectType()
export class CustomerRequestFile {
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
