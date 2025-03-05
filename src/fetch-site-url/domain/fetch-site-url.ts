import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class FetchSiteUrl {
  @Field(() => Int)
  id: number;

  @Field()
  url: string;

  @Field()
  isFetch: boolean;

  @Field()
  date: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
