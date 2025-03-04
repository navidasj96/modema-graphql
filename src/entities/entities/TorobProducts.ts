import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetColors } from "./BasicCarpetColors";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { Products } from "./Products";
import { Subproducts } from "./Subproducts";

@Index(
  "torob_products_basic_carpet_color_id_foreign",
  ["basicCarpetColorId"],
  {}
)
@Index("torob_products_basic_carpet_size_id_foreign", ["basicCarpetSizeId"], {})
@Index("torob_products_product_id_foreign", ["productId"], {})
@Index("torob_products_subproduct_id_foreign", ["subproductId"], {})
@Entity("torob_products", { schema: "modema" })
export class TorobProducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("varchar", { name: "size_title", nullable: true, length: 191 })
  sizeTitle: string | null;

  @Column("varchar", { name: "color_title", nullable: true, length: 191 })
  colorTitle: string | null;

  @Column("varchar", { name: "torob_category", nullable: true, length: 191 })
  torobCategory: string | null;

  @Column("int", {
    name: "basic_carpet_size_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetSizeId: number | null;

  @Column("int", {
    name: "basic_carpet_color_id",
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId: number | null;

  @Column("int", {
    name: "product_category_id",
    nullable: true,
    unsigned: true,
  })
  productCategoryId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => BasicCarpetColors,
    (basicCarpetColors) => basicCarpetColors.torobProducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_color_id", referencedColumnName: "id" }])
  basicCarpetColor: BasicCarpetColors;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.torobProducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(() => Products, (products) => products.torobProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.torobProducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
