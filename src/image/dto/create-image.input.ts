import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field(() => Int)
  id: number;

  @Field()
  filename: string;

  @Field()
  mime: string;

  @Field()
  originalFilename: string;

  @Field()
  uploadSource: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  altText?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  imageRecreated: boolean;

  @Field({ nullable: true })
  altTextEn?: string;

  @Field(() => [BasicCarpetSizes])
  basicCarpetSizes: BasicCarpetSizes[];

  @Field(() => [BasicCarpetSizes])
  basicCarpetSizes2: BasicCarpetSizes[];

  @Field(() => [CampaignVotingImages])
  campaignVotingImages: CampaignVotingImages[];

  @Field(() => [ColorCategories])
  colorCategories: ColorCategories[];

  @Field(() => [ColorCategories])
  colorCategories2: ColorCategories[];

  @Field(() => [ColorCategories])
  colorCategories3: ColorCategories[];

  @Field(() => [CustomerImageProduct])
  customerImageProducts: CustomerImageProduct[];

  @Field(() => [HelpDesks])
  helpDesks: HelpDesks[];

  @Field(() => [HomePageCustomerImages])
  homePageCustomerImages: HomePageCustomerImages[];

  @Field(() => [HomePageCustomerImages])
  homePageCustomerImages2: HomePageCustomerImages[];

  @Field(() => [ImageProduct])
  imageProducts: ImageProduct[];

  @Field(() => [ImageSubproduct])
  imageSubproducts: ImageSubproduct[];

  @Field(() => [ImagesSizeGuidesDetails])
  imagesSizeGuidesDetails: ImagesSizeGuidesDetails[];

  @Field(() => [PatternCategories])
  patternCategories: PatternCategories[];

  @Field(() => [ProductCategories])
  productCategories: ProductCategories[];

  @Field(() => [ProductCategories])
  productCategories2: ProductCategories[];

  @Field(() => [ProductCategories])
  productCategories3: ProductCategories[];

  @Field(() => [ProductColorImages])
  productColorImages: ProductColorImages[];

  @Field(() => [Products])
  products: Products[];

  @Field(() => [ReturnRequestItemImages])
  returnRequestItemImages: ReturnRequestItemImages[];

  @Field(() => [SizeGuides])
  sizeGuides: SizeGuides[];

  @Field(() => [SizeGuidesDetails])
  sizeGuidesDetails: SizeGuidesDetails[];

  @Field(() => [SubproductSpecialImages])
  subproductSpecialImages: SubproductSpecialImages[];

  @Field(() => [Subproducts])
  subproducts: Subproducts[];

  @Field(() => [Tags])
  tags: Tags[];

  @Field(() => [Tags])
  tags2: Tags[];
}
