import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetColors } from "./BasicCarpetColors";
import { Images } from "./Images";
import { Products } from "./Products";

@Index(
  "product_color_images_basic_carpet_color_id_index",
  ["basicCarpetColorId"],
  {}
)
@Index("product_color_images_image_id_index", ["imageId"], {})
@Index("product_color_images_product_id_index", ["productId"], {})
@Entity("product_color_images", { schema: "mydatabase" })
export class ProductColorImages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "image_id", unsigned: true })
  imageId: number;

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
    (basicCarpetColors) => basicCarpetColors.productColorImages,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_color_id", referencedColumnName: "id" }])
  basicCarpetColor: BasicCarpetColors;

  @ManyToOne(() => Images, (images) => images.productColorImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @ManyToOne(() => Products, (products) => products.productColorImages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
