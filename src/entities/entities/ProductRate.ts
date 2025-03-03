import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";
import { Rates } from "./Rates";
import { Subproducts } from "./Subproducts";
import { Users } from "./Users";
import { ProductComments } from "./ProductComments";

@Index("product_rate_product_comment_id_index", ["productCommentId"], {})
@Index(
  "product_rate_rate_id_product_comment_id_unique",
  ["rateId", "productCommentId"],
  { unique: true }
)
@Index("product_rates_product_id_index", ["productId"], {})
@Index("product_rates_rate_id_index", ["rateId"], {})
@Index("product_rates_subproduct_id_index", ["subproductId"], {})
@Index("product_rates_user_id_index", ["userId"], {})
@Entity("product_rate", { schema: "mydatabase" })
export class ProductRate {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", { name: "rate_id", nullable: true, unsigned: true })
  rateId: number | null;

  @Column("double", {
    name: "rate_value",
    unsigned: true,
    precision: 6,
    scale: 2,
  })
  rateValue: number;

  @Column("int", { name: "product_comment_id", nullable: true, unsigned: true })
  productCommentId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("double", {
    name: "old_rate",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  oldRate: number | null;

  @ManyToOne(() => Products, (products) => products.productRates, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Rates, (rates) => rates.productRates, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "rate_id", referencedColumnName: "id" }])
  rate: Rates;

  @ManyToOne(() => Subproducts, (subproducts) => subproducts.productRates, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;

  @ManyToOne(() => Users, (users) => users.productRates, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(
    () => ProductComments,
    (productComments) => productComments.productRates,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "product_comment_id", referencedColumnName: "id" }])
  productComment: ProductComments;
}
