import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ColorCategories } from "./ColorCategories";

@Index(
  "color_category_details_color_category_id_index",
  ["colorCategoryId"],
  {}
)
@Entity("color_category_details", { schema: "mydatabase" })
export class ColorCategoryDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "color_category_id", nullable: true, unsigned: true })
  colorCategoryId: number | null;

  @Column("varchar", { name: "title", nullable: true, length: 191 })
  title: string | null;

  @Column("text", { name: "detail_text", nullable: true })
  detailText: string | null;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "title_en", nullable: true, length: 191 })
  titleEn: string | null;

  @Column("text", { name: "detail_text_en", nullable: true })
  detailTextEn: string | null;

  @ManyToOne(
    () => ColorCategories,
    (colorCategories) => colorCategories.colorCategoryDetails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "color_category_id", referencedColumnName: "id" }])
  colorCategory: ColorCategories;
}
