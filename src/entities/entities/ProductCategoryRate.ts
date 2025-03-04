import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductCategories } from "./ProductCategories";
import { Rates } from "./Rates";

@Index(
  "product_category_rate_product_category_id_index",
  ["productCategoryId"],
  {}
)
@Index("product_category_rate_rate_id_index", ["rateId"], {})
@Entity("product_category_rate", { schema: "modema" })
export class ProductCategoryRate {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "product_category_id", unsigned: true })
  productCategoryId: number;

  @Column("int", { name: "rate_id", unsigned: true })
  rateId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.productCategoryRates,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "product_category_id", referencedColumnName: "id" }])
  productCategory: ProductCategories;

  @ManyToOne(() => Rates, (rates) => rates.productCategoryRates, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "rate_id", referencedColumnName: "id" }])
  rate: Rates;
}
