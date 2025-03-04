import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PreorderPreorderStatus } from "./PreorderPreorderStatus";
import { Preorders } from "./Preorders";

@Entity("preorder_statuses", { schema: "modema" })
export class PreorderStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "status", length: 191 })
  status: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => PreorderPreorderStatus,
    (preorderPreorderStatus) => preorderPreorderStatus.preorderStatus
  )
  preorderPreorderStatuses: PreorderPreorderStatus[];

  @OneToMany(() => Preorders, (preorders) => preorders.preorderStatus)
  preorders: Preorders[];
}
