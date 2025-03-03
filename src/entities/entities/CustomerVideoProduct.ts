import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { Videos } from "./Videos";

@Index("customer_video_product_product_id_index", ["productId"], {})
@Index("customer_video_product_video_id_index", ["videoId"], {})
@Entity("customer_video_product", { schema: "mydatabase" })
export class CustomerVideoProduct {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "video_id", unsigned: true })
  videoId: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

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

  @ManyToOne(() => Products, (products) => products.customerVideoProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Videos, (videos) => videos.customerVideoProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "video_id", referencedColumnName: "id" }])
  video: Videos;
}
