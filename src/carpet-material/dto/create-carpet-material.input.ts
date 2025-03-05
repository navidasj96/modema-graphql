import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarpetMaterialInput {
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
