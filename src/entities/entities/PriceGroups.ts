import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DiscountSubjects } from "./DiscountSubjects";
import { PriceGroupSize } from "./PriceGroupSize";
import { Products } from "./Products";

@Entity("price_groups", { schema: "modema" })
export class PriceGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => DiscountSubjects,
    (discountSubjects) => discountSubjects.priceGroup
  )
  discountSubjects: DiscountSubjects[];

  @OneToMany(
    () => PriceGroupSize,
    (priceGroupSize) => priceGroupSize.priceGroup
  )
  priceGroupSizes: PriceGroupSize[];

  @OneToMany(() => Products, (products) => products.priceGroup)
  products: Products[];
}
