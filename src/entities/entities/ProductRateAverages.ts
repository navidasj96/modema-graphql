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

@Index("product_rate_averages_product_id_index", ["productId"], {})
@Index(
  "product_rate_averages_product_id_subproduct_id_rate_id_unique",
  ["productId", "subproductId", "rateId"],
  { unique: true }
)
@Index("product_rate_averages_rate_id_index", ["rateId"], {})
@Index("product_rate_averages_subproduct_id_index", ["subproductId"], {})
@Entity("product_rate_averages", { schema: "mydatabase" })
export class ProductRateAverages {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", nullable: true, unsigned: true })
  subproductId: number | null;

  @Column("int", { name: "rate_id", unsigned: true })
  rateId: number;

  @Column("double", {
    name: "average_rate",
    precision: 22,
    default: () => "'0'",
  })
  averageRate: number;

  @Column("int", { name: "rate_count", default: () => "'0'" })
  rateCount: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Products, (products) => products.productRateAverages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(() => Rates, (rates) => rates.productRateAverages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "rate_id", referencedColumnName: "id" }])
  rate: Rates;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.productRateAverages,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
