import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateHelpDeskInput {
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
