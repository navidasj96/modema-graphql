import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Images } from './Images';
import { Products } from './Products';

@ObjectType()
export class ImageProduct {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  imageId: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Images)
  image: Images;

  @Field(() => Products)
  product: Products;
}
