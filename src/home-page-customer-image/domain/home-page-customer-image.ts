import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Images } from './Images';
import { Products } from './Products';

@ObjectType()
export class HomePageCustomerImage {
  @Field(() => Int)
  id: number;

  @Field(() => Int, { nullable: true })
  mobileImageId?: number;

  @Field(() => Int, { nullable: true })
  desktopImageId?: number;

  @Field(() => Int)
  sortOrder: number;

  @Field({ nullable: true })
  desktopImageAlt?: string;

  @Field({ nullable: true })
  mobileImageAlt?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  productId?: number;

  @Field(() => Images)
  desktopImage: Images;

  @Field(() => Images)
  mobileImage: Images;

  @Field(() => Products)
  product: Products;
}
