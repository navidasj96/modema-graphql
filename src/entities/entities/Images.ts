import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BasicCarpetSizes } from './BasicCarpetSizes';
import { CampaignVotingImages } from './CampaignVotingImages';
import { ColorCategories } from './ColorCategories';
import { CustomerImageProduct } from './CustomerImageProduct';
import { HelpDesks } from './HelpDesks';
import { HomePageCustomerImages } from './HomePageCustomerImages';
import { ImageProduct } from './ImageProduct';
import { ImageSubproduct } from './ImageSubproduct';
import { ImagesSizeGuidesDetails } from './ImagesSizeGuidesDetails';
import { PatternCategories } from './PatternCategories';
import { ProductCategories } from './ProductCategories';
import { ProductColorImages } from './ProductColorImages';
import { Products } from './Products';
import { ReturnRequestItemImages } from './ReturnRequestItemImages';
import { SizeGuides } from './SizeGuides';
import { SizeGuidesDetails } from './SizeGuidesDetails';
import { SubproductSpecialImages } from './SubproductSpecialImages';
import { Subproducts } from './Subproducts';
import { Tags } from './Tags';

@Entity('images', { schema: 'modema' })
export class Image {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('varchar', { name: 'upload_source', length: 191 })
  uploadSource: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('varchar', { name: 'alt_text', nullable: true, length: 766 })
  altText: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('tinyint', {
    name: 'image_recreated',
    width: 1,
    default: () => "'0'",
  })
  imageRecreated: boolean;

  @Column('varchar', { name: 'alt_text_en', nullable: true, length: 191 })
  altTextEn: string | null;

  @OneToMany(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.image,
  )
  basicCarpetSizes: BasicCarpetSizes[];

  @OneToMany(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.mobileImage,
  )
  basicCarpetSizes2: BasicCarpetSizes[];

  @OneToMany(
    () => CampaignVotingImages,
    (campaignVotingImages) => campaignVotingImages.image,
  )
  campaignVotingImages: CampaignVotingImages[];

  @OneToMany(
    () => ColorCategories,
    (colorCategories) => colorCategories.homepageImage,
  )
  colorCategories: ColorCategories[];

  @OneToMany(() => ColorCategories, (colorCategories) => colorCategories.image)
  colorCategories2: ColorCategories[];

  @OneToMany(
    () => ColorCategories,
    (colorCategories) => colorCategories.mobileImage,
  )
  colorCategories3: ColorCategories[];

  @OneToMany(
    () => CustomerImageProduct,
    (customerImageProduct) => customerImageProduct.image,
  )
  customerImageProducts: CustomerImageProduct[];

  @OneToMany(() => HelpDesks, (helpDesks) => helpDesks.image)
  helpDesks: HelpDesks[];

  @OneToMany(
    () => HomePageCustomerImages,
    (homePageCustomerImages) => homePageCustomerImages.desktopImage,
  )
  homePageCustomerImages: HomePageCustomerImages[];

  @OneToMany(
    () => HomePageCustomerImages,
    (homePageCustomerImages) => homePageCustomerImages.mobileImage,
  )
  homePageCustomerImages2: HomePageCustomerImages[];

  @OneToMany(() => ImageProduct, (imageProduct) => imageProduct.image)
  imageProducts: ImageProduct[];

  @OneToMany(() => ImageSubproduct, (imageSubproduct) => imageSubproduct.image)
  imageSubproducts: ImageSubproduct[];

  @OneToMany(
    () => ImagesSizeGuidesDetails,
    (imagesSizeGuidesDetails) => imagesSizeGuidesDetails.image,
  )
  imagesSizeGuidesDetails: ImagesSizeGuidesDetails[];

  @OneToMany(
    () => PatternCategories,
    (patternCategories) => patternCategories.image,
  )
  patternCategories: PatternCategories[];

  @OneToMany(
    () => ProductCategories,
    (productCategories) => productCategories.homepageImage,
  )
  productCategories: ProductCategories[];

  @OneToMany(
    () => ProductCategories,
    (productCategories) => productCategories.image,
  )
  productCategories2: ProductCategories[];

  @OneToMany(
    () => ProductCategories,
    (productCategories) => productCategories.mobileImage,
  )
  productCategories3: ProductCategories[];

  @OneToMany(
    () => ProductColorImages,
    (productColorImages) => productColorImages.image,
  )
  productColorImages: ProductColorImages[];

  @OneToMany(() => Products, (products) => products.image)
  products: Products[];

  @OneToMany(
    () => ReturnRequestItemImages,
    (returnRequestItemImages) => returnRequestItemImages.image,
  )
  returnRequestItemImages: ReturnRequestItemImages[];

  @OneToMany(() => SizeGuides, (sizeGuides) => sizeGuides.image)
  sizeGuides: SizeGuides[];

  @OneToMany(
    () => SizeGuidesDetails,
    (sizeGuidesDetails) => sizeGuidesDetails.image,
  )
  sizeGuidesDetails: SizeGuidesDetails[];

  @OneToMany(
    () => SubproductSpecialImages,
    (subproductSpecialImages) => subproductSpecialImages.image,
  )
  subproductSpecialImages: SubproductSpecialImages[];

  @OneToMany(() => Subproducts, (subproducts) => subproducts.image)
  subproducts: Subproducts[];

  @OneToMany(() => Tags, (tags) => tags.sliderImage)
  tags: Tags[];

  @OneToMany(() => Tags, (tags) => tags.image)
  tags2: Tags[];
}
