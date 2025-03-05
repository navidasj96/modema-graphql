import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarpetFeatureUserInput {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  carpetFeatureId: number;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetFeatures)
  carpetFeature: CarpetFeatures;

  @Field(() => Users)
  user: Users;
}
