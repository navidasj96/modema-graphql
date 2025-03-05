import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CustomerRequestFiles } from './CustomerRequestFiles';
import { Users } from './Users';

@ObjectType()
export class CustomerRequest {
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
