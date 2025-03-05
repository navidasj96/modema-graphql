import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class BasicCarpetSize {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field(() => Float)
  width: number;

  @Field(() => Float)
  length: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  carpetVolume?: number;

  @Field(() => Float, { nullable: true, defaultValue: 0 })
  padVolume?: number;

  @Field(() => Float)
  unitRatio: number;

  @Field(() => Int, { defaultValue: 0 })
  viewCounter: number;

  @Field({ nullable: true })
  sizeText?: string;

  @Field({ nullable: true })
  widthText?: string;

  @Field({ nullable: true })
  lengthText?: string;

  @Field({ nullable: true })
  altText?: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

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
  titleEn?: string;

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

  @Field({ nullable: true })
  sizeTextEn?: string;

  @Field(() => [BasicCarpetSizeDetails])
  basicCarpetSizeDetails: BasicCarpetSizeDetails[];

  @Field(() => Images)
  image: Images;

  @Field(() => Images)
  mobileImage: Images;

  @Field(() => [CampaignFreeOfferSizes])
  campaignFreeOfferSizes: CampaignFreeOfferSizes[];

  @Field(() => [CouponSubjects])
  couponSubjects: CouponSubjects[];

  @Field(() => [DesignersProductPriceRanges])
  designersProductPriceRanges: DesignersProductPriceRanges[];

  @Field(() => [DiscountSubjects])
  discountSubjects: DiscountSubjects[];

  @Field(() => [PriceGroupSize])
  priceGroupSizes: PriceGroupSize[];

  @Field(() => [ProductionPads])
  productionPads: ProductionPads[];

  @Field(() => [Products])
  products: Products[];

  @Field(() => [RipTemplateItems])
  ripTemplateItems: RipTemplateItems[];

  @Field(() => [Subproducts])
  subproducts: Subproducts[];

  @Field(() => [TorobProducts])
  torobProducts: TorobProducts[];
}