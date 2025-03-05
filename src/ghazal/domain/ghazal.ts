import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Ghazal {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  explanation?: string;

  @Field({ nullable: true })
  poem?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
