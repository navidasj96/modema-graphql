import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { ProductionPads } from "./ProductionPads";
import { ProductionPadStatuses } from "./ProductionPadStatuses";

@Index("prod_pad_prod_pad_status_pad_id_foreign", ["productionPadId"], {})
@Index(
  "prod_pad_prod_pad_status_status_id_foreign",
  ["productionPadStatusId"],
  {}
)
@Index("production_pad_production_pad_status_user_id_index", ["userId"], {})
@Entity("production_pad_production_pad_status", { schema: "mydatabase" })
export class ProductionPadProductionPadStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "production_pad_id", unsigned: true })
  productionPadId: number;

  @Column("int", { name: "production_pad_status_id", unsigned: true })
  productionPadStatusId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.productionPadProductionPadStatuses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(
    () => ProductionPads,
    (productionPads) => productionPads.productionPadProductionPadStatuses,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "production_pad_id", referencedColumnName: "id" }])
  productionPad: ProductionPads;

  @ManyToOne(
    () => ProductionPadStatuses,
    (productionPadStatuses) =>
      productionPadStatuses.productionPadProductionPadStatuses,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "production_pad_status_id", referencedColumnName: "id" },
  ])
  productionPadStatus: ProductionPadStatuses;
}
