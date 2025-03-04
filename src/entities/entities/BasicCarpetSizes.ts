import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetSizeDetails } from "./BasicCarpetSizeDetails";
import { Images } from "./Images";
import { CampaignFreeOfferSizes } from "./CampaignFreeOfferSizes";
import { CouponSubjects } from "./CouponSubjects";
import { DesignersProductPriceRanges } from "./DesignersProductPriceRanges";
import { DiscountSubjects } from "./DiscountSubjects";
import { PriceGroupSize } from "./PriceGroupSize";
import { ProductionPads } from "./ProductionPads";
import { Products } from "./Products";
import { RipTemplateItems } from "./RipTemplateItems";
import { Subproducts } from "./Subproducts";
import { TorobProducts } from "./TorobProducts";

@Index("basic_carpet_sizes_code_unique", ["code"], { unique: true })
@Index("basic_carpet_sizes_image_id_foreign", ["imageId"], {})
@Index("basic_carpet_sizes_length_index", ["length"], {})
@Index("basic_carpet_sizes_mobile_image_id_foreign", ["mobileImageId"], {})
@Index("basic_carpet_sizes_title_unique", ["title"], { unique: true })
@Index("basic_carpet_sizes_width_index", ["width"], {})
@Index("basic_carpet_sizes_width_length_unique", ["width", "length"], {
  unique: true,
})
@Index("code", ["code"], {})
@Index("id", ["id"], {})
@Index("sort_order", ["sortOrder"], {})
@Entity("basic_carpet_sizes", { schema: "modema" })
export class BasicCarpetSizes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", unique: true, length: 191 })
  title: string;

  @Column("varchar", { name: "code", unique: true, length: 2 })
  code: string;

  @Column("double", { name: "width", unsigned: true, precision: 22 })
  width: number;

  @Column("double", { name: "length", unsigned: true, precision: 22 })
  length: number;

  @Column("double", {
    name: "carpet_volume",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  carpetVolume: number | null;

  @Column("double", {
    name: "pad_volume",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  padVolume: number | null;

  @Column("double", { name: "unit_ratio", precision: 22 })
  unitRatio: number;

  @Column("int", { name: "view_counter", default: () => "'0'" })
  viewCounter: number;

  @Column("varchar", { name: "size_text", nullable: true, length: 191 })
  sizeText: string | null;

  @Column("varchar", { name: "width_text", nullable: true, length: 191 })
  widthText: string | null;

  @Column("varchar", { name: "length_text", nullable: true, length: 191 })
  lengthText: string | null;

  @Column("varchar", { name: "alt_text", nullable: true, length: 191 })
  altText: string | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "mobile_image_id", nullable: true, unsigned: true })
  mobileImageId: number | null;

  @Column("int", { name: "homepage_image_id", nullable: true, unsigned: true })
  homepageImageId: number | null;

  @Column("text", { name: "meta_tags", nullable: true })
  metaTags: string | null;

  @Column("varchar", { name: "page_title", nullable: true, length: 191 })
  pageTitle: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", { name: "url_slug", nullable: true, length: 191 })
  urlSlug: string | null;

  @Column("varchar", { name: "title_en", nullable: true, length: 191 })
  titleEn: string | null;

  @Column("varchar", { name: "alt_text_en", nullable: true, length: 191 })
  altTextEn: string | null;

  @Column("text", { name: "meta_tags_en", nullable: true })
  metaTagsEn: string | null;

  @Column("varchar", { name: "page_title_en", nullable: true, length: 191 })
  pageTitleEn: string | null;

  @Column("text", { name: "description_en", nullable: true })
  descriptionEn: string | null;

  @Column("varchar", { name: "url_slug_en", nullable: true, length: 191 })
  urlSlugEn: string | null;

  @Column("varchar", { name: "size_text_en", nullable: true, length: 191 })
  sizeTextEn: string | null;

  @OneToMany(
    () => BasicCarpetSizeDetails,
    (basicCarpetSizeDetails) => basicCarpetSizeDetails.basicCarpetSize
  )
  basicCarpetSizeDetails: BasicCarpetSizeDetails[];

  @ManyToOne(() => Images, (images) => images.basicCarpetSizes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(() => Images, (images) => images.basicCarpetSizes2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "mobile_image_id", referencedColumnName: "id" }])
  mobileImage: Images;

  @OneToMany(
    () => CampaignFreeOfferSizes,
    (campaignFreeOfferSizes) => campaignFreeOfferSizes.basicCarpetSize
  )
  campaignFreeOfferSizes: CampaignFreeOfferSizes[];

  @OneToMany(
    () => CouponSubjects,
    (couponSubjects) => couponSubjects.basicCarpetSize
  )
  couponSubjects: CouponSubjects[];

  @OneToMany(
    () => DesignersProductPriceRanges,
    (designersProductPriceRanges) => designersProductPriceRanges.basicCarpetSize
  )
  designersProductPriceRanges: DesignersProductPriceRanges[];

  @OneToMany(
    () => DiscountSubjects,
    (discountSubjects) => discountSubjects.basicCarpetSize
  )
  discountSubjects: DiscountSubjects[];

  @OneToMany(
    () => PriceGroupSize,
    (priceGroupSize) => priceGroupSize.basicCarpetSize
  )
  priceGroupSizes: PriceGroupSize[];

  @OneToMany(
    () => ProductionPads,
    (productionPads) => productionPads.basicCarpetSize
  )
  productionPads: ProductionPads[];

  @OneToMany(() => Products, (products) => products.minBasicCarpetSize)
  products: Products[];

  @OneToMany(
    () => RipTemplateItems,
    (ripTemplateItems) => ripTemplateItems.basicCarpetSize
  )
  ripTemplateItems: RipTemplateItems[];

  @OneToMany(() => Subproducts, (subproducts) => subproducts.basicCarpetSize)
  subproducts: Subproducts[];

  @OneToMany(
    () => TorobProducts,
    (torobProducts) => torobProducts.basicCarpetSize
  )
  torobProducts: TorobProducts[];
}
