import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttributeProduct } from "./AttributeProduct";
import { CouponSubjects } from "./CouponSubjects";
import { CustomerImageProduct } from "./CustomerImageProduct";
import { CustomerVideoProduct } from "./CustomerVideoProduct";
import { DiscountNotifications } from "./DiscountNotifications";
import { DiscountSubjects } from "./DiscountSubjects";
import { FavoriteProducts } from "./FavoriteProducts";
import { HomePageCustomerImages } from "./HomePageCustomerImages";
import { ImageProduct } from "./ImageProduct";
import { IncredibleOffers } from "./IncredibleOffers";
import { InvoiceProductHistories } from "./InvoiceProductHistories";
import { InvoiceProducts } from "./InvoiceProducts";
import { LabelProduct } from "./LabelProduct";
import { OutOfStockButListedProducts } from "./OutOfStockButListedProducts";
import { Preorders } from "./Preorders";
import { ProductColorImages } from "./ProductColorImages";
import { ProductColorSales } from "./ProductColorSales";
import { ProductComments } from "./ProductComments";
import { ProductLikes } from "./ProductLikes";
import { ProductProductCategory } from "./ProductProductCategory";
import { ProductRate } from "./ProductRate";
import { ProductRateAverages } from "./ProductRateAverages";
import { ProductTag } from "./ProductTag";
import { ProductVideo } from "./ProductVideo";
import { BasicCarpetColors } from "./BasicCarpetColors";
import { Images } from "./Images";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { PriceGroups } from "./PriceGroups";
import { ReadyToSendProducts } from "./ReadyToSendProducts";
import { RecommendedProducts } from "./RecommendedProducts";
import { RelatedProducts } from "./RelatedProducts";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";
import { ReturnRequestItems } from "./ReturnRequestItems";
import { ReturnedInvoiceProducts } from "./ReturnedInvoiceProducts";
import { SpecialOffers } from "./SpecialOffers";
import { Subproducts } from "./Subproducts";
import { TorobProducts } from "./TorobProducts";
import { UserCarts } from "./UserCarts";
import { WonderfulOffers } from "./WonderfulOffers";

@Index("id", ["id"], {})
@Index("image_id", ["imageId"], {})
@Index("products_best_seller_color_id_index", ["bestSellerColorId"], {})
@Index(
  "products_id_min_basic_carpet_size_id_unique",
  ["id", "minBasicCarpetSizeId"],
  { unique: true }
)
@Index("products_idx1", ["isCarpetPad"], {})
@Index("products_idx2", ["id", "minBasicCarpetSizeId"], { unique: true })
@Index("products_image_id_index", ["imageId"], {})
@Index("products_is_active_index", ["isActive"], {})
@Index("products_is_carpet_pad_index", ["isCarpetPad"], {})
@Index(
  "products_is_self_employed_designer_index",
  ["isSelfEmployedDesigner"],
  {}
)
@Index("products_is_shaggy_index", ["isShaggy"], {})
@Index("products_min_basic_carpet_size_id_index", ["minBasicCarpetSizeId"], {})
@Index("products_name_es_unique", ["nameEs"], { unique: true })
@Index("products_name_unique", ["name"], { unique: true })
@Index("products_parent_product_id_index", ["parentProductId"], {})
@Index("products_price_group_id_index", ["priceGroupId"], {})
@Index("products_russian_name_unique", ["russianName"], { unique: true })
@Index("sort_order", ["sortOrder"], {})
@Entity("products", { schema: "mydatabase" })
export class Products {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("varchar", { name: "search_name", nullable: true, length: 191 })
  searchName: string | null;

  @Column("varchar", {
    name: "russian_name",
    nullable: true,
    unique: true,
    length: 191,
  })
  russianName: string | null;

  @Column("decimal", { name: "price", nullable: true, precision: 18, scale: 2 })
  price: string | null;

  @Column("int", { name: "price_group_id", nullable: true, unsigned: true })
  priceGroupId: number | null;

  @Column("longtext", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "sale_count", unsigned: true, default: () => "'0'" })
  saleCount: number;

  @Column("int", { name: "sale_count_daily", default: () => "'0'" })
  saleCountDaily: number;

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
    comment: "Must fill with cron jobs.",
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
      "if this product's size is customizable, width and length fields are locked and are given by user when ordering this product, also the price is calculated using per_inch_price in settings.",
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

  @Column("tinyint", {
    name: "designer_is_general",
    unsigned: true,
    default: () => "'0'",
  })
  designerIsGeneral: number;

  @Column("varchar", { name: "collection_name", nullable: true, length: 191 })
  collectionName: string | null;

  @Column("tinyint", {
    name: "is_self_employed_designer",
    unsigned: true,
    default: () => "'0'",
  })
  isSelfEmployedDesigner: number;

  @Column("tinyint", {
    name: "is_carpet_pad",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  isCarpetPad: boolean | null;

  @Column("tinyint", { name: "is_shaggy", width: 1, default: () => "'0'" })
  isShaggy: boolean;

  @Column("text", { name: "meta_tags", nullable: true })
  metaTags: string | null;

  @Column("varchar", { name: "page_title", nullable: true, length: 191 })
  pageTitle: string | null;

  @Column("int", {
    name: "view_counter",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  viewCounter: number | null;

  @Column("varchar", { name: "code", nullable: true, length: 191 })
  code: string | null;

  @Column("int", {
    name: "min_basic_carpet_size_id",
    nullable: true,
    unsigned: true,
  })
  minBasicCarpetSizeId: number | null;

  @Column("int", {
    name: "best_seller_color_id",
    nullable: true,
    unsigned: true,
  })
  bestSellerColorId: number | null;

  @Column("tinyint", {
    name: "carpet_has_roots",
    width: 1,
    default: () => "'0'",
  })
  carpetHasRoots: boolean;

  @Column("int", { name: "parent_product_id", nullable: true, unsigned: true })
  parentProductId: number | null;

  @Column("varchar", { name: "url_slug", nullable: true, length: 191 })
  urlSlug: string | null;

  @Column("varchar", { name: "emalls_title", nullable: true, length: 191 })
  emallsTitle: string | null;

  @Column("tinyint", { name: "emalls_active", width: 1, default: () => "'0'" })
  emallsActive: boolean;

  @Column("tinyint", {
    name: "snapppay_active",
    width: 1,
    default: () => "'0'",
  })
  snapppayActive: boolean;

  @Column("tinyint", { name: "snapppay_sort_order", nullable: true, width: 1 })
  snapppaySortOrder: boolean | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("datetime", {
    name: "active_updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  activeUpdatedAt: Date;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("tinyint", {
    name: "new_subproducts_created",
    unsigned: true,
    default: () => "'0'",
  })
  newSubproductsCreated: number;

  @Column("varchar", { name: "name_en", nullable: true, length: 191 })
  nameEn: string | null;

  @Column("varchar", { name: "search_name_en", nullable: true, length: 191 })
  searchNameEn: string | null;

  @Column("text", { name: "meta_tags_en", nullable: true })
  metaTagsEn: string | null;

  @Column("varchar", { name: "page_title_en", nullable: true, length: 191 })
  pageTitleEn: string | null;

  @Column("text", { name: "description_en", nullable: true })
  descriptionEn: string | null;

  @Column("varchar", { name: "url_slug_en", nullable: true, length: 191 })
  urlSlugEn: string | null;

  @Column("varchar", {
    name: "name_es",
    nullable: true,
    unique: true,
    length: 191,
  })
  nameEs: string | null;

  @OneToMany(
    () => AttributeProduct,
    (attributeProduct) => attributeProduct.product
  )
  attributeProducts: AttributeProduct[];

  @OneToMany(() => CouponSubjects, (couponSubjects) => couponSubjects.product)
  couponSubjects: CouponSubjects[];

  @OneToMany(
    () => CustomerImageProduct,
    (customerImageProduct) => customerImageProduct.product
  )
  customerImageProducts: CustomerImageProduct[];

  @OneToMany(
    () => CustomerVideoProduct,
    (customerVideoProduct) => customerVideoProduct.product
  )
  customerVideoProducts: CustomerVideoProduct[];

  @OneToMany(
    () => DiscountNotifications,
    (discountNotifications) => discountNotifications.product
  )
  discountNotifications: DiscountNotifications[];

  @OneToMany(
    () => DiscountSubjects,
    (discountSubjects) => discountSubjects.product
  )
  discountSubjects: DiscountSubjects[];

  @OneToMany(
    () => FavoriteProducts,
    (favoriteProducts) => favoriteProducts.product
  )
  favoriteProducts: FavoriteProducts[];

  @OneToMany(
    () => HomePageCustomerImages,
    (homePageCustomerImages) => homePageCustomerImages.product
  )
  homePageCustomerImages: HomePageCustomerImages[];

  @OneToMany(() => ImageProduct, (imageProduct) => imageProduct.product)
  imageProducts: ImageProduct[];

  @OneToMany(
    () => IncredibleOffers,
    (incredibleOffers) => incredibleOffers.product
  )
  incredibleOffers: IncredibleOffers[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.product
  )
  invoiceProductHistories: InvoiceProductHistories[];

  @OneToMany(
    () => InvoiceProductHistories,
    (invoiceProductHistories) => invoiceProductHistories.relatedProduct
  )
  invoiceProductHistories2: InvoiceProductHistories[];

  @OneToMany(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.product
  )
  invoiceProducts: InvoiceProducts[];

  @OneToMany(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.relatedProduct
  )
  invoiceProducts2: InvoiceProducts[];

  @OneToMany(() => LabelProduct, (labelProduct) => labelProduct.product)
  labelProducts: LabelProduct[];

  @OneToMany(
    () => OutOfStockButListedProducts,
    (outOfStockButListedProducts) => outOfStockButListedProducts.product
  )
  outOfStockButListedProducts: OutOfStockButListedProducts[];

  @OneToMany(() => Preorders, (preorders) => preorders.product)
  preorders: Preorders[];

  @OneToMany(
    () => ProductColorImages,
    (productColorImages) => productColorImages.product
  )
  productColorImages: ProductColorImages[];

  @OneToMany(
    () => ProductColorSales,
    (productColorSales) => productColorSales.product
  )
  productColorSales: ProductColorSales[];

  @OneToMany(
    () => ProductComments,
    (productComments) => productComments.product
  )
  productComments: ProductComments[];

  @OneToMany(() => ProductLikes, (productLikes) => productLikes.product)
  productLikes: ProductLikes[];

  @OneToMany(
    () => ProductProductCategory,
    (productProductCategory) => productProductCategory.product
  )
  productProductCategories: ProductProductCategory[];

  @OneToMany(() => ProductRate, (productRate) => productRate.product)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductRateAverages,
    (productRateAverages) => productRateAverages.product
  )
  productRateAverages: ProductRateAverages[];

  @OneToMany(() => ProductTag, (productTag) => productTag.product)
  productTags: ProductTag[];

  @OneToMany(() => ProductVideo, (productVideo) => productVideo.product)
  productVideos: ProductVideo[];

  @ManyToOne(
    () => BasicCarpetColors,
    (basicCarpetColors) => basicCarpetColors.products,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "best_seller_color_id", referencedColumnName: "id" }])
  bestSellerColor: BasicCarpetColors;

  @ManyToOne(() => Images, (images) => images.products, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.products,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "min_basic_carpet_size_id", referencedColumnName: "id" },
  ])
  minBasicCarpetSize: BasicCarpetSizes;

  @ManyToOne(() => Products, (products) => products.products, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "parent_product_id", referencedColumnName: "id" }])
  parentProduct: Products;

  @OneToMany(() => Products, (products) => products.parentProduct)
  products: Products[];

  @ManyToOne(() => PriceGroups, (priceGroups) => priceGroups.products, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "price_group_id", referencedColumnName: "id" }])
  priceGroup: PriceGroups;

  @OneToMany(
    () => ReadyToSendProducts,
    (readyToSendProducts) => readyToSendProducts.product
  )
  readyToSendProducts: ReadyToSendProducts[];

  @OneToMany(
    () => RecommendedProducts,
    (recommendedProducts) => recommendedProducts.product
  )
  recommendedProducts: RecommendedProducts[];

  @OneToMany(
    () => RelatedProducts,
    (relatedProducts) => relatedProducts.product
  )
  relatedProducts: RelatedProducts[];

  @OneToMany(
    () => RelatedProducts,
    (relatedProducts) => relatedProducts.relatedProduct
  )
  relatedProducts2: RelatedProducts[];

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) => returnRequestItemHistories.product
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @OneToMany(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.product
  )
  returnRequestItems: ReturnRequestItems[];

  @OneToMany(
    () => ReturnedInvoiceProducts,
    (returnedInvoiceProducts) => returnedInvoiceProducts.product
  )
  returnedInvoiceProducts: ReturnedInvoiceProducts[];

  @OneToMany(
    () => SpecialOffers,
    (specialOffers) => specialOffers.specialOfferProduct
  )
  specialOffers: SpecialOffers[];

  @OneToMany(
    () => SpecialOffers,
    (specialOffers) => specialOffers.wonderfulOfferProduct
  )
  specialOffers2: SpecialOffers[];

  @OneToMany(() => Subproducts, (subproducts) => subproducts.product)
  subproducts: Subproducts[];

  @OneToMany(() => TorobProducts, (torobProducts) => torobProducts.product)
  torobProducts: TorobProducts[];

  @OneToMany(() => UserCarts, (userCarts) => userCarts.product)
  userCarts: UserCarts[];

  @OneToMany(() => UserCarts, (userCarts) => userCarts.relatedProduct)
  userCarts2: UserCarts[];

  @OneToMany(
    () => WonderfulOffers,
    (wonderfulOffers) => wonderfulOffers.product
  )
  wonderfulOffers: WonderfulOffers[];
}
