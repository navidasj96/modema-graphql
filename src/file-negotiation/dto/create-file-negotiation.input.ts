import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateFileNegotiationInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  negotiationId: number;

  @Field(() => Int)
  fileId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Files)
  file: Files;

  @Field(() => Negotiations)
  negotiation: Negotiations;
}
