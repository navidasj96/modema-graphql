import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarpetUsagePlaceUserInput {
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
