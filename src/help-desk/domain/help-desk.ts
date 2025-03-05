import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Images } from './Images';
import { Users } from './Users';

@ObjectType()
export class HelpDesk {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  userId: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field(() => Int, { nullable: true })
  imageId?: number;

  @Field(() => Int, { nullable: true })
  isOnline?: number;

  @Field(() => Int, { nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Images)
  image: Images;

  @Field(() => Users)
  user: Users;
}
