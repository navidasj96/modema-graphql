import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";
import { ReturnRequestItems } from "./ReturnRequestItems";
import { ReturnedInvoices } from "./ReturnedInvoices";

@Entity("return_reasons", { schema: "mydatabase" })
export class ReturnReasons {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "reason", length: 191 })
  reason: string;

  @Column("int", { name: "sort_order", default: () => "'0'" })
  sortOrder: number;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) => returnRequestItemHistories.returnReason
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @OneToMany(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.returnReason
  )
  returnRequestItems: ReturnRequestItems[];

  @OneToMany(
    () => ReturnedInvoices,
    (returnedInvoices) => returnedInvoices.returnReason
  )
  returnedInvoices: ReturnedInvoices[];
}
