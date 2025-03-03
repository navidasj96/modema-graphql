import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AttributeGroups } from "./AttributeGroups";
import { CouponSubjects } from "./CouponSubjects";
import { DiscountSubjects } from "./DiscountSubjects";
import { Images } from "./Images";
import { ImageSizes } from "./ImageSizes";
import { ProductCategoryRate } from "./ProductCategoryRate";
import { ProductProductCategory } from "./ProductProductCategory";

@Index("id", ["id"], {})
@Index("id_2", ["id"], {})
@Index("image_id", ["imageId"], {})
@Index("image_size_id", ["imageSizeId"], {})
@Index("parent_id", ["parentId"], {})
@Index("parent_id_2", ["parentId"], {})
@Index("product_categories_homepage_image_id_index", ["homepageImageId"], {})
@Index("product_categories_image_id_index", ["imageId"], {})
@Index("product_categories_mobile_image_id_index", ["mobileImageId"], {})
@Index("product_categories_parent_id_index", ["parentId"], {})
@Index("product_categories_parent_id_name_unique", ["parentId", "name"], {
  unique: true,
})
@Index("sort_order", ["sortOrder"], {})
@Entity("product_categories", { schema: "mydatabase" })
export class ProductCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "parent_id", nullable: true, unsigned: true })
  parentId: number | null;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "mobile_image_id", nullable: true, unsigned: true })
  mobileImageId: number | null;

  @Column("int", { name: "homepage_image_id", nullable: true, unsigned: true })
  homepageImageId: number | null;

  @Column("tinyint", {
    name: "show_on_homepage",
    width: 1,
    default: () => "'0'",
  })
  showOnHomepage: boolean;

  @Column("int", { name: "image_size_id", nullable: true, unsigned: true })
  imageSizeId: number | null;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "search_name", nullable: true, length: 191 })
  searchName: string | null;

  @Column("varchar", { name: "hierarchy_code", nullable: true, length: 191 })
  hierarchyCode: string | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("int", {
    name: "view_counter",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  viewCounter: number | null;

  @Column("text", { name: "meta_tags", nullable: true })
  metaTags: string | null;

  @Column("varchar", { name: "page_title", nullable: true, length: 191 })
  pageTitle: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("varchar", {
    name: "page_title_single_size",
    nullable: true,
    length: 191,
  })
  pageTitleSingleSize: string | null;

  @Column("text", { name: "description_single_size", nullable: true })
  descriptionSingleSize: string | null;

  @Column("text", { name: "meta_tags_single_size", nullable: true })
  metaTagsSingleSize: string | null;

  @Column("varchar", { name: "url_slug", nullable: true, length: 191 })
  urlSlug: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

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

  @OneToMany(
    () => AttributeGroups,
    (attributeGroups) => attributeGroups.productCategory
  )
  attributeGroups: AttributeGroups[];

  @OneToMany(
    () => CouponSubjects,
    (couponSubjects) => couponSubjects.productCategory
  )
  couponSubjects: CouponSubjects[];

  @OneToMany(
    () => DiscountSubjects,
    (discountSubjects) => discountSubjects.productCategory
  )
  discountSubjects: DiscountSubjects[];

  @ManyToOne(() => Images, (images) => images.productCategories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "homepage_image_id", referencedColumnName: "id" }])
  homepageImage: Images;

  @ManyToOne(() => Images, (images) => images.productCategories2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(() => ImageSizes, (imageSizes) => imageSizes.productCategories, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_size_id", referencedColumnName: "id" }])
  imageSize: ImageSizes;

  @ManyToOne(() => Images, (images) => images.productCategories3, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "mobile_image_id", referencedColumnName: "id" }])
  mobileImage: Images;

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.productCategories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: ProductCategories;

  @OneToMany(
    () => ProductCategories,
    (productCategories) => productCategories.parent
  )
  productCategories: ProductCategories[];

  @OneToMany(
    () => ProductCategoryRate,
    (productCategoryRate) => productCategoryRate.productCategory
  )
  productCategoryRates: ProductCategoryRate[];

  @OneToMany(
    () => ProductProductCategory,
    (productProductCategory) => productProductCategory.productCategory
  )
  productProductCategories: ProductProductCategory[];
}
