import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Images } from './Images';
import { Subproducts } from './Subproducts';

@ObjectType()
export class ImageSubproduct {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  imageId: number;

  @Field(() => Int)
  subproductId: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Images)
  image: Images;

  @Field(() => Subproducts)
  subproduct: Subproducts;
}