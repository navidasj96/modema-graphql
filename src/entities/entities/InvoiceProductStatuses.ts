import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceProductItemInvoiceProductStatus } from "./InvoiceProductItemInvoiceProductStatus";
import { InvoiceProductItems } from "./InvoiceProductItems";

@Entity("invoice_product_statuses", { schema: "modema" })
export class InvoiceProductStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "status", length: 191 })
  status: string;

  @Column("int", { name: "step", nullable: true, default: () => "'1'" })
  step: number | null;

  @Column("int", { name: "step_shaggy", nullable: true })
  stepShaggy: number | null;

  @Column("varchar", { name: "color", length: 191 })
  color: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @OneToMany(
    () => InvoiceProductItemInvoiceProductStatus,
    (invoiceProductItemInvoiceProductStatus) =>
      invoiceProductItemInvoiceProductStatus.invoiceProductStatus
  )
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @OneToMany(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.currentStatus
  )
  invoiceProductItems: InvoiceProductItems[];
}
