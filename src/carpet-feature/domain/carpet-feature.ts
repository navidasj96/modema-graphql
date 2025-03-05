import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CarpetFeatureUser } from './CarpetFeatureUser';

@ObjectType()
export class CarpetFeature {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [CarpetFeatureUser])
  carpetFeatureUsers: CarpetFeatureUser[];
}
