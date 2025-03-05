import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateColorCategoryInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => Int)
  viewCounter: number;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  imageId?: number;

  @Field(() => Int, { nullable: true })
  mobileImageId?: number;

  @Field(() => Int, { nullable: true })
  homepageImageId?: number;

  @Field({ nullable: true })
  metaTags?: string;

  @Field({ nullable: true })
  pageTitle?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  altTextEn?: string;

  @Field({ nullable: true })
  metaTagsEn?: string;

  @Field({ nullable: true })
  pageTitleEn?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  urlSlugEn?: string;

  @Field(() => Images)
  homepageImage: Images;

  @Field(() => Images)
  image: Images;

  @Field(() => Images)
  mobileImage: Images;

  @Field(() => [ColorCategoryDetails])
  colorCategoryDetails: ColorCategoryDetails[];

  @Field(() => [ColorCategorySubproduct])
  colorCategorySubproducts: ColorCategorySubproduct[];
}
