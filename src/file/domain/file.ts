import { Field, ObjectType, Int } from '@nestjs/graphql';
import { FileNegotiation } from './FileNegotiation';

@ObjectType()
export class File {
  @Field(() => Int)
  id: number;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [FileNegotiation])
  fileNegotiations: FileNegotiation[];
}
