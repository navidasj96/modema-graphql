import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Users } from './Users';

@ObjectType()
export class HeardAboutUsOption {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  sortOrder: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Users])
  users: Users[];
}
