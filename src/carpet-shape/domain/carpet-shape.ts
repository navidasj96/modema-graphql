import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Designs } from './Designs';

@ObjectType()
export class CarpetShape {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  minWidth: number;

  @Field(() => Float)
  maxWidth: number;

  @Field(() => Float)
  minLength: number;

  @Field(() => Float)
  maxLength: number;

  @Field()
  hasLength: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field(() => [Designs])
  designs: Designs[];
}
