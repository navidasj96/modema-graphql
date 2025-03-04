import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { ColorCategoryDetails } from "./ColorCategoryDetails";
import { ColorCategorySubproduct } from "./ColorCategorySubproduct";

@Index("color_categories_homepage_image_id_index", ["homepageImageId"], {})
@Index("color_categories_image_id_index", ["imageId"], {})
@Index("color_categories_mobile_image_id_index", ["mobileImageId"], {})
@Index("color_categories_name_unique", ["name"], { unique: true })
@Entity("color_categories", { schema: "modema" })
export class ColorCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("varchar", { name: "color", length: 191 })
  color: string;

  @Column("int", { name: "view_counter", default: () => "'0'" })
  viewCounter: number;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

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

  @Column("varchar", {
    name: "alt_text",
    nullable: true,
    comment: "For Seo",
    length: 191,
  })
  altText: string | null;

  @Column("varchar", { name: "name_en", nullable: true, length: 191 })
  nameEn: string | null;

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

  @ManyToOne(() => Images, (images) => images.colorCategories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "homepage_image_id", referencedColumnName: "id" }])
  homepageImage: Images;

  @ManyToOne(() => Images, (images) => images.colorCategories2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(() => Images, (images) => images.colorCategories3, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "mobile_image_id", referencedColumnName: "id" }])
  mobileImage: Images;

  @OneToMany(
    () => ColorCategoryDetails,
    (colorCategoryDetails) => colorCategoryDetails.colorCategory
  )
  colorCategoryDetails: ColorCategoryDetails[];

  @OneToMany(
    () => ColorCategorySubproduct,
    (colorCategorySubproduct) => colorCategorySubproduct.colorCategory
  )
  colorCategorySubproducts: ColorCategorySubproduct[];
}
