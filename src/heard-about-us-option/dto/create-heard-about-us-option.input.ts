import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateHeardAboutUsOptionInput {
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
