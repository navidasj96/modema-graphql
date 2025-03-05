import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CarpetFeatures } from './CarpetFeatures';
import { Users } from './Users';

@ObjectType()
export class CarpetFeatureUser {
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
