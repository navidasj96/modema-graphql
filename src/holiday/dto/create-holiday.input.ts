import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateHolidayInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field()
  holidayDate: string;

  @Field(() => Int)
  weekday: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Users)
  user: Users;
}
