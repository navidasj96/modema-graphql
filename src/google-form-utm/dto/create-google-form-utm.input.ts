import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateGoogleFormUtmInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field()
  formId: string;

  @Field()
  url: string;

  @Field()
  utm: string;

  @Field()
  status: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Users)
  user: Users;
}
