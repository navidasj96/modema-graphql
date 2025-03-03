import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetSizes } from "./BasicCarpetSizes";

@Index(
  "basic_carpet_size_details_basic_carpet_size_id_index",
  ["basicCarpetSizeId"],
  {}
)
@Entity("basic_carpet_size_details", { schema: "mydatabase" })
export class BasicCarpetSizeDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "basic_carpet_size_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId: number | null;

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
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.basicCarpetSizeDetails,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;
}
