import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFetchSiteUrlInput {
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
