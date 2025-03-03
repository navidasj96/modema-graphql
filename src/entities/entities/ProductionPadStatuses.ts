import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductionPadProductionPadStatus } from "./ProductionPadProductionPadStatus";
import { ProductionPads } from "./ProductionPads";

@Entity("production_pad_statuses", { schema: "mydatabase" })
export class ProductionPadStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("int", { name: "step", default: () => "'1'" })
  step: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ProductionPadProductionPadStatus,
    (productionPadProductionPadStatus) =>
      productionPadProductionPadStatus.productionPadStatus
  )
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @OneToMany(
    () => ProductionPads,
    (productionPads) => productionPads.productionPadStatus
  )
  productionPads: ProductionPads[];
}
