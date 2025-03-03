import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductTag } from "./ProductTag";
import { Images } from "./Images";

@Index("slider_image_id", ["sliderImageId"], {})
@Index("tags_image_id_index", ["imageId"], {})
@Entity("tags", { schema: "mydatabase" })
export class Tags {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "slider_image_id", nullable: true, unsigned: true })
  sliderImageId: number | null;

  @Column("double", {
    name: "discount",
    nullable: true,
    precision: 22,
    default: () => "'0'",
  })
  discount: number | null;

  @Column("tinyint", { name: "special_offer", width: 1, default: () => "'0'" })
  specialOffer: boolean;

  @Column("int", { name: "column_width", default: () => "'12'" })
  columnWidth: number;

  @Column("int", { name: "column_order", default: () => "'1'" })
  columnOrder: number;

  @Column("varchar", { name: "title", length: 191 })
  title: string;

  @Column("varchar", { name: "search_title", nullable: true, length: 191 })
  searchTitle: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

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

  @Column("varchar", { name: "url_slug", nullable: true, length: 191 })
  urlSlug: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "title_en", nullable: true, length: 191 })
  titleEn: string | null;

  @Column("varchar", { name: "search_title_en", nullable: true, length: 191 })
  searchTitleEn: string | null;

  @Column("text", { name: "meta_tags_en", nullable: true })
  metaTagsEn: string | null;

  @Column("varchar", { name: "page_title_en", nullable: true, length: 191 })
  pageTitleEn: string | null;

  @Column("text", { name: "description_en", nullable: true })
  descriptionEn: string | null;

  @Column("varchar", { name: "url_slug_en", nullable: true, length: 191 })
  urlSlugEn: string | null;

  @OneToMany(() => ProductTag, (productTag) => productTag.tag)
  productTags: ProductTag[];

  @ManyToOne(() => Images, (images) => images.tags, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "slider_image_id", referencedColumnName: "id" }])
  sliderImage: Images;

  @ManyToOne(() => Images, (images) => images.tags2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;
}
