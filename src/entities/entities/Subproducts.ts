import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttributeSubproduct } from "./AttributeSubproduct";
import { ColorCategorySubproduct } from "./ColorCategorySubproduct";
import { CouponSubjects } from "./CouponSubjects";
import { DiscountSubjects } from "./DiscountSubjects";
import { FavoriteProducts } from "./FavoriteProducts";
import { ImageSubproduct } from "./ImageSubproduct";
import { InvoiceProductHistories } from "./InvoiceProductHistories";
import { InvoiceProducts } from "./InvoiceProducts";
import { NeedsPhotographySubproducts } from "./NeedsPhotographySubproducts";
import { Preorders } from "./Preorders";
import { ProductComments } from "./ProductComments";
import { ProductLikes } from "./ProductLikes";
import { ProductRate } from "./ProductRate";
import { ProductRateAverages } from "./ProductRateAverages";
import { ProductTag } from "./ProductTag";
import { RecommendedSubproducts } from "./RecommendedSubproducts";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";
import { ReturnRequestItems } from "./ReturnRequestItems";
import { ReturnedInvoiceProducts } from "./ReturnedInvoiceProducts";
import { SubproductSpecialImages } from "./SubproductSpecialImages";
import { SubproductStockHistories } from "./SubproductStockHistories";
import { SubproductVideo } from "./SubproductVideo";
import { BasicCarpetBorders } from "./BasicCarpetBorders";
import { BasicCarpetBrands } from "./BasicCarpetBrands";
import { BasicCarpetColors } from "./BasicCarpetColors";
import { BasicCarpetDesigners } from "./BasicCarpetDesigners";
import { BasicCarpetDesigns } from "./BasicCarpetDesigns";
import { BasicCarpetMaterials } from "./BasicCarpetMaterials";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { BasicCarpetTypes } from "./BasicCarpetTypes";
import { Images } from "./Images";
import { Products } from "./Products";
import { Videos } from "./Videos";
import { TorobProducts } from "./TorobProducts";
import { UserCarts } from "./UserCarts";

@Index("basic_carpet_brand_id", ["basicCarpetBrandId"], {})
@Index("basic_carpet_color_id", ["basicCarpetColorId"], {})
@Index("basic_carpet_design_id", ["basicCarpetDesignId"], {})
@Index("basic_carpet_designer_id", ["basicCarpetDesignerId"], {})
@Index("basic_carpet_material_id", ["basicCarpetMaterialId"], {})
@Index("basic_carpet_size_id", ["basicCarpetSizeId"], {})
@Index("basic_carpet_type_id", ["basicCarpetTypeId"], {})
@Index("id", ["id"], {})
@Index("image_id", ["imageId"], {})
@Index("product_id", ["productId"], {})
@Index("product_id_2", ["productId"], {})
@Index("sort_order", ["sortOrder"], {})
@Index("subproducts_basic_carpet_border_id_index", ["basicCarpetBorderId"], {})
@Index("subproducts_bundle_pad_price_index", ["bundlePadPrice"], {})
@Index("subproducts_bundle_price_index", ["bundlePrice"], {})
@Index("subproducts_code_unique", ["code"], { unique: true })
@Index("subproducts_image_id_index", ["imageId"], {})
@Index("subproducts_is_active_index", ["isActive"], {})
@Index("subproducts_name_unique", ["productId", "name"], { unique: true })
@Index("subproducts_pad_price_index", ["padPrice"], {})
@Index("subproducts_price_index", ["price"], {})
@Index(
  "subproducts_prod_id_size_id_color_id_unique",
  [
    "productId",
    "basicCarpetDesignerId",
    "basicCarpetSizeId",
    "basicCarpetColorId",
  ],
  { unique: true }
)
@Index("subproducts_product_id_index", ["productId"], {})
@Index("subproducts_short_code_index", ["shortCode"], {})
@Index("subproducts_video_id_index", ["videoId"], {})
@Entity("subproducts", { schema: "modema" })
export class Subproducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "video_id", nullable: true, unsigned: true })
  videoId: number | null;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "search_name", nullable: true, length: 191 })
  searchName: string | null;

  @Column("decimal", { name: "price", nullable: true, precision: 18, scale: 2 })
  price: string | null;

  @Column("decimal", {
    name: "pad_price",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  padPrice: string;

  @Column("decimal", {
    name: "bundle_price",
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  bundlePrice: string | null;

  @Column("decimal", {
    name: "bundle_pad_price",
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  bundlePadPrice: string | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "sale_count", unsigned: true, default: () => "'0'" })
  saleCount: number;

  @Column("int", { name: "total_like", unsigned: true, default: () => "'0'" })
  totalLike: number;

  @Column("int", {
    name: "total_dislike",
    unsigned: true,
    default: () => "'0'",
  })
  totalDislike: number;

  @Column("double", {
    name: "rate",
    unsigned: true,
    precision: 4,
    scale: 2,
    default: () => "'0.00'",
  })
  rate: number;

  @Column("int", {
    name: "rate_count",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  rateCount: number | null;

  @Column("double", {
    name: "size",
    unsigned: true,
    precision: 22,
    default: () => "'0'",
  })
  size: number;

  @Column("tinyint", {
    name: "size_is_customizable",
    comment:
      "if this subproduct's size is customizable, width and length fields are locked and are given by user when ordering this subproduct, also the price is calculated using per_inch_price in settings.",
    unsigned: true,
    default: () => "'0'",
  })
  sizeIsCustomizable: number;

  @Column("double", {
    name: "width",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  width: number | null;

  @Column("double", {
    name: "length",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  length: number | null;

  @Column("varchar", { name: "colors", nullable: true, length: 191 })
  colors: string | null;

  @Column("int", {
    name: "basic_carpet_type_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetTypeId: number | null;

  @Column("int", {
    name: "basic_carpet_design_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetDesignId: number | null;

  @Column("int", {
    name: "basic_carpet_designer_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetDesignerId: number | null;

  @Column("int", {
    name: "basic_carpet_material_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetMaterialId: number | null;

  @Column("int", {
    name: "basic_carpet_size_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId: number | null;

  @Column("int", {
    name: "basic_carpet_color_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId: number | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    unique: true,
    length: 191,
  })
  code: string | null;

  @Column("varchar", { name: "short_code", nullable: true, length: 191 })
  shortCode: string | null;

  @Column("int", {
    name: "basic_carpet_brand_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetBrandId: number | null;

  @Column("int", {
    name: "basic_carpet_border_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetBorderId: number | null;

  @Column("varchar", { name: "border_color", nullable: true, length: 191 })
  borderColor: string | null;

  @Column("varchar", { name: "color_name", nullable: true, length: 191 })
  colorName: string | null;

  @Column("int", { name: "stock_count", nullable: true, default: () => "'0'" })
  stockCount: number | null;

  @Column("tinyint", {
    name: "is_out_of_stock",
    width: 1,
    default: () => "'0'",
  })
  isOutOfStock: boolean;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", {
    name: "main_image_changed",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  mainImageChanged: boolean | null;

  @Column("tinyint", {
    name: "other_images_changed",
    width: 1,
    default: () => "'0'",
  })
  otherImagesChanged: boolean;

  @Column("tinyint", {
    name: "color_categories_changed",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  colorCategoriesChanged: number | null;

  @Column("int", { name: "sepidar_id", nullable: true })
  sepidarId: number | null;

  @Column("tinyint", {
    name: "get_stock_count_from_sepidar",
    width: 1,
    default: () => "'1'",
  })
  getStockCountFromSepidar: boolean;

  @Column("varchar", { name: "name_en", nullable: true, length: 191 })
  nameEn: string | null;

  @Column("varchar", { name: "search_name_en", nullable: true, length: 191 })
  searchNameEn: string | null;

  @Column("varchar", { name: "color_name_es", nullable: true, length: 191 })
  colorNameEs: string | null;

  @OneToMany(
    () => AttributeSubproduct,
    (attributeSubproduct) => attributeSubproduct.subproduct
  )
  attributeSubproducts: AttributeSubproduct[];

  @OneToMany(
    () => ColorCategorySubproduct,
    (colorCategorySubproduct) => colorCategorySubproduct.subproduct
  )
  colorCategorySubproducts: ColorCategorySubproduct[];

  @OneToMany(
    () => CouponSubjects,
    (couponSubjects) => couponSubjects.subproduct
  )
  couponSubjects: CouponSubjects[];

  @OneToMany(
    () => DiscountSubjects,
    (discountSubjects) => discountSubjects.subproduct
  )
  discountSubjects: DiscountSubjects[];

  @OneToMany(
    () => FavoriteProducts,
    (favoriteProducts) => favoriteProducts.subproduct
  )
  favoriteProducts: FavoriteProducts[];

  @OneToMany(
    () => ImageSubproduct,
    (imageSubproduct) => imageSubproduct.subproduct
  )
  imageSubproducts: ImageSubproduct[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.relatedSubproduct
  )
  invoiceProductHistories: InvoiceProductHistories[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.subproduct
  )
  invoiceProductHistories2: InvoiceProductHistories[];

  @OneToMany(() => InvoiceProducts, (invoiceProducts) => invoiceProducts.pad)
  invoiceProducts: InvoiceProducts[];

  @OneToMany(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.relatedSubproduct
  )
  invoiceProducts2: InvoiceProducts[];

  @OneToMany(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.subproduct
  )
  invoiceProducts3: InvoiceProducts[];

  @OneToMany(
    () => NeedsPhotographySubproducts,
    (needsPhotographySubproducts) => needsPhotographySubproducts.subproduct
  )
  needsPhotographySubproducts: NeedsPhotographySubproducts[];

  @OneToMany(() => Preorders, (preorders) => preorders.subproduct)
  preorders: Preorders[];

  @OneToMany(
    () => ProductComments,
    (productComments) => productComments.subproduct
  )
  productComments: ProductComments[];

  @OneToMany(() => ProductLikes, (productLikes) => productLikes.subproduct)
  productLikes: ProductLikes[];

  @OneToMany(() => ProductRate, (productRate) => productRate.subproduct)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductRateAverages,
    (productRateAverages) => productRateAverages.subproduct
  )
  productRateAverages: ProductRateAverages[];

  @OneToMany(() => ProductTag, (productTag) => productTag.subproduct)
  productTags: ProductTag[];

  @OneToMany(
    () => RecommendedSubproducts,
    (recommendedSubproducts) => recommendedSubproducts.subproduct
  )
  recommendedSubproducts: RecommendedSubproducts[];

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) => returnRequestItemHistories.subproduct
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @OneToMany(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.subproduct
  )
  returnRequestItems: ReturnRequestItems[];

  @OneToMany(
    () => ReturnedInvoiceProducts,
    (returnedInvoiceProducts) => returnedInvoiceProducts.subproduct
  )
  returnedInvoiceProducts: ReturnedInvoiceProducts[];

  @OneToMany(
    () => SubproductSpecialImages,
    (subproductSpecialImages) => subproductSpecialImages.subproduct
  )
  subproductSpecialImages: SubproductSpecialImages[];

  @OneToMany(
    () => SubproductStockHistories,
    (subproductStockHistories) => subproductStockHistories.subproduct
  )
  subproductStockHistories: SubproductStockHistories[];

  @OneToMany(
    () => SubproductVideo,
    (subproductVideo) => subproductVideo.subproduct
  )
  subproductVideos: SubproductVideo[];

  @ManyToOne(
    () => BasicCarpetBorders,
    (basicCarpetBorders) => basicCarpetBorders.subproducts,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_border_id", referencedColumnName: "id" }])
  basicCarpetBorder: BasicCarpetBorders;

  @ManyToOne(
    () => BasicCarpetBrands,
    (basicCarpetBrands) => basicCarpetBrands.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "basic_carpet_brand_id", referencedColumnName: "id" }])
  basicCarpetBrand: BasicCarpetBrands;

  @ManyToOne(
    () => BasicCarpetColors,
    (basicCarpetColors) => basicCarpetColors.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "basic_carpet_color_id", referencedColumnName: "id" }])
  basicCarpetColor: BasicCarpetColors;

  @ManyToOne(
    () => BasicCarpetDesigners,
    (basicCarpetDesigners) => basicCarpetDesigners.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "basic_carpet_designer_id", referencedColumnName: "id" },
  ])
  basicCarpetDesigner: BasicCarpetDesigners;

  @ManyToOne(
    () => BasicCarpetDesigns,
    (basicCarpetDesigns) => basicCarpetDesigns.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "basic_carpet_design_id", referencedColumnName: "id" }])
  basicCarpetDesign: BasicCarpetDesigns;

  @ManyToOne(
    () => BasicCarpetMaterials,
    (basicCarpetMaterials) => basicCarpetMaterials.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([
    { name: "basic_carpet_material_id", referencedColumnName: "id" },
  ])
  basicCarpetMaterial: BasicCarpetMaterials;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(
    () => BasicCarpetTypes,
    (basicCarpetTypes) => basicCarpetTypes.subproducts,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "basic_carpet_type_id", referencedColumnName: "id" }])
  basicCarpetType: BasicCarpetTypes;

  @ManyToOne(() => Images, (images) => images.subproducts, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(() => Products, (products) => products.subproducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Videos, (videos) => videos.subproducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "video_id", referencedColumnName: "id" }])
  video: Videos;

  @OneToMany(() => TorobProducts, (torobProducts) => torobProducts.subproduct)
  torobProducts: TorobProducts[];

  @OneToMany(() => UserCarts, (userCarts) => userCarts.relatedSubproduct)
  userCarts: UserCarts[];

  @OneToMany(() => UserCarts, (userCarts) => userCarts.subproduct)
  userCarts2: UserCarts[];
}
