import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceProducts } from "./InvoiceProducts";
import { InvoiceReversals } from "./InvoiceReversals";

@Index(
  "invoice_reversal_items_invoice_product_id_index",
  ["invoiceProductId"],
  {}
)
@Index(
  "invoice_reversal_items_invoice_reversal_id_index",
  ["invoiceReversalId"],
  {}
)
@Entity("invoice_reversal_items", { schema: "mydatabase" })
export class InvoiceReversalItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_reversal_id", unsigned: true })
  invoiceReversalId: number;

  @Column("int", { name: "invoice_product_id", unsigned: true })
  invoiceProductId: number;

  @Column("tinyint", { name: "with_pad", width: 1, default: () => "'0'" })
  withPad: boolean;

  @Column("int", { name: "count", default: () => "'1'" })
  count: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.invoiceReversalItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_product_id", referencedColumnName: "id" }])
  invoiceProduct: InvoiceProducts;

  @ManyToOne(
    () => InvoiceReversals,
    (invoiceReversals) => invoiceReversals.invoiceReversalItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_reversal_id", referencedColumnName: "id" }])
  invoiceReversal: InvoiceReversals;
}
