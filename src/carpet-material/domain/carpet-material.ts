import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Designs } from './Designs';

@ObjectType()
export class CarpetMaterial {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Float)
  pricePerInch: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Designs])
  designs: Designs[];
}
