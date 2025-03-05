import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CarpetUsagePlaces } from './CarpetUsagePlaces';
import { Users } from './Users';

@ObjectType()
export class CarpetUsagePlaceUser {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  carpetUsagePlaceId: number;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CarpetUsagePlaces)
  carpetUsagePlace: CarpetUsagePlaces;

  @Field(() => Users)
  user: Users;
}
