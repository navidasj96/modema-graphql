import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Config {
  @Field(() => Int)
  id: number;

  @Field()
  key: string;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
