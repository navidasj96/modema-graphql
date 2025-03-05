import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Files } from './Files';
import { Negotiations } from './Negotiations';

@ObjectType()
export class FileNegotiation {
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
