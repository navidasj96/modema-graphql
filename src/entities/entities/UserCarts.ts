import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Designs } from "./Designs";
import { Products } from "./Products";
import { Subproducts } from "./Subproducts";
import { Users } from "./Users";

@Index("user_carts_design_id_index", ["designId"], {})
@Index(
  "user_carts_idx1",
  ["userId", "subproductId", "withPad", "relatedSubproductId"],
  { unique: true }
)
@Index("user_carts_product_id_index", ["productId"], {})
@Index("user_carts_related_product_id_index", ["relatedProductId"], {})
@Index("user_carts_related_subproduct_id_index", ["relatedSubproductId"], {})
@Index("user_carts_subproduct_id_index", ["subproductId"], {})
@Index("user_carts_user_id_index", ["userId"], {})
@Entity("user_carts", { schema: "modema" })
export class UserCarts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "product_id", nullable: true, unsigned: true })
  productId: number | null;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", { name: "design_id", nullable: true, unsigned: true })
  designId: number | null;

  @Column("smallint", { name: "count", unsigned: true })
  count: number;

  @Column("smallint", { name: "bundle_count", default: () => "'0'" })
  bundleCount: number;

  @Column("double", {
    name: "width",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  width: number | null;

  @Column("double", {
    name: "length",
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  length: number | null;

  @Column("tinyint", { name: "with_pad", width: 1, default: () => "'0'" })
  withPad: boolean;

  @Column("int", { name: "related_product_id", nullable: true, unsigned: true })
  relatedProductId: number | null;

  @Column("int", {
    name: "related_subproduct_id",
    nullable: true,
    unsigned: true,
  })
  relatedSubproductId: number | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Designs, (designs) => designs.userCarts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "design_id", referencedColumnName: "id" }])
  design: Designs;

  @ManyToOne(() => Products, (products) => products.userCarts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Products, (products) => products.userCarts2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "related_product_id", referencedColumnName: "id" }])
  relatedProduct: Products;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.userCarts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "related_subproduct_id", referencedColumnName: "id" }])
  relatedSubproduct: Subproducts;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.userCarts2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;

  @ManyToOne(() => Users, (users) => users.userCarts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
