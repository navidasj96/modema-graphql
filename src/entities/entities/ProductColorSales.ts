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

@Index(
  "product_color_sales_basic_carpet_color_id_index",
  ["basicCarpetColorId"],
  {}
)
@Index(
  "product_color_sales_product_id_basic_carpet_color_id_unique",
  ["productId", "basicCarpetColorId"],
  { unique: true }
)
@Index("product_color_sales_product_id_index", ["productId"], {})
@Entity("product_color_sales", { schema: "modema" })
export class ProductColorSales {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "basic_carpet_color_id", unsigned: true })
  basicCarpetColorId: number;

  @Column("int", { name: "sale_count", default: () => "'0'" })
  saleCount: number;

  @Column("int", { name: "sale_count_year", default: () => "'0'" })
  saleCountYear: number;

  @Column("double", {
    name: "average_sale_count",
    precision: 22,
    default: () => "'0'",
  })
  averageSaleCount: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => BasicCarpetColors,
    (basicCarpetColors) => basicCarpetColors.productColorSales,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_color_id", referencedColumnName: "id" }])
  basicCarpetColor: BasicCarpetColors;

  @ManyToOne(() => Products, (products) => products.productColorSales, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;
}
