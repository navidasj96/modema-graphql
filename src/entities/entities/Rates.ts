import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductCategoryRate } from "./ProductCategoryRate";
import { ProductRate } from "./ProductRate";
import { ProductRateAverages } from "./ProductRateAverages";

@Entity("rates", { schema: "mydatabase" })
export class Rates {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "description", length: 191 })
  description: string;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", {
    name: "is_active",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ProductCategoryRate,
    (productCategoryRate) => productCategoryRate.rate
  )
  productCategoryRates: ProductCategoryRate[];

  @OneToMany(() => ProductRate, (productRate) => productRate.rate)
  productRates: ProductRate[];

  @OneToMany(
    () => ProductRateAverages,
    (productRateAverages) => productRateAverages.rate
  )
  productRateAverages: ProductRateAverages[];
}
