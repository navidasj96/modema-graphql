import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ExitControlItems } from './ExitControlItems';
import { Users } from './Users';

@ObjectType()
export class ExitControl {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field()
  exitDate: string;

  @Field()
  driverName: string;

  @Field()
  driverPhone: string;

  @Field()
  plateNo: string;

  @Field()
  isClosed: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ExitControlItems])
  exitControlItems: ExitControlItems[];

  @Field(() => Users)
  user: Users;
}
