import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetColors } from "./BasicCarpetColors";
import { Products } from "./Products";
import { Videos } from "./Videos";

@Index("product_video_basic_carpet_color_id_index", ["basicCarpetColorId"], {})
@Index("product_video_product_id_index", ["productId"], {})
@Index("product_video_video_id_index", ["videoId"], {})
@Index("product_video_video_id_product_id_unique", ["videoId", "productId"], {
  unique: true,
})
@Entity("product_video", { schema: "modema" })
export class ProductVideo {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "video_id", unsigned: true })
  videoId: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", {
    name: "basic_carpet_color_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId: number | null;

  @Column("int", {
    name: "sort_order",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sortOrder: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => BasicCarpetColors,
    (basicCarpetColors) => basicCarpetColors.productVideos,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_color_id", referencedColumnName: "id" }])
  basicCarpetColor: BasicCarpetColors;

  @ManyToOne(() => Products, (products) => products.productVideos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Videos, (videos) => videos.productVideos, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "video_id", referencedColumnName: "id" }])
  video: Videos;
}
