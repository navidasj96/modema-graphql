import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceProductItems } from "./InvoiceProductItems";
import { InvoiceProductStatuses } from "./InvoiceProductStatuses";
import { Users } from "./Users";

@Index("created_at", ["createdAt"], {})
@Index("invoice_product_item_index", ["invoiceProductItemId"], {})
@Index("invoice_product_item_user_index", ["userId"], {})
@Index("invoice_product_status_index", ["invoiceProductStatusId"], {})
@Entity("invoice_product_item_invoice_product_status", { schema: "mydatabase" })
export class InvoiceProductItemInvoiceProductStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_product_item_id", unsigned: true })
  invoiceProductItemId: number;

  @Column("int", { name: "invoice_product_status_id", unsigned: true })
  invoiceProductStatusId: number;

  @Column("int", {
    name: "user_id",
    comment: "Operator who changes the status.",
    unsigned: true,
  })
  userId: number;

  @Column("varchar", { name: "comment", nullable: true, length: 191 })
  comment: string | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @ManyToOne(
    () => InvoiceProductItems,
    (invoiceProductItems) =>
      invoiceProductItems.invoiceProductItemInvoiceProductStatuses,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_product_item_id", referencedColumnName: "id" }])
  invoiceProductItem: InvoiceProductItems;

  @ManyToOne(
    () => InvoiceProductStatuses,
    (invoiceProductStatuses) =>
      invoiceProductStatuses.invoiceProductItemInvoiceProductStatuses,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "invoice_product_status_id", referencedColumnName: "id" },
  ])
  invoiceProductStatus: InvoiceProductStatuses;

  @ManyToOne(
    () => Users,
    (users) => users.invoiceProductItemInvoiceProductStatuses,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
