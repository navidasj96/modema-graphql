import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Invoices } from "./Invoices";

@Entity("chapar_settlement_statuses", { schema: "modema" })
export class ChaparSettlementStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "status", length: 191 })
  status: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Invoices, (invoices) => invoices.chaparSettlementStatus)
  invoices: Invoices[];
}
