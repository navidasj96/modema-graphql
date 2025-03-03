import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceReversalItems } from "./InvoiceReversalItems";
import { Invoices } from "./Invoices";
import { InvoiceStatuses } from "./InvoiceStatuses";
import { Users } from "./Users";

@Index("invoice_reversals_invoice_id_index", ["invoiceId"], {})
@Index("invoice_reversals_invoice_status_id_index", ["invoiceStatusId"], {})
@Index("invoice_reversals_reviewed_by_index", ["reviewedBy"], {})
@Entity("invoice_reversals", { schema: "mydatabase" })
export class InvoiceReversals {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("tinyint", { name: "whole_invoice", width: 1, default: () => "'0'" })
  wholeInvoice: boolean;

  @Column("int", { name: "invoice_status_id", unsigned: true })
  invoiceStatusId: number;

  @Column("tinyint", { name: "is_reviewed", width: 1, default: () => "'0'" })
  isReviewed: boolean;

  @Column("int", { name: "reviewed_by", nullable: true, unsigned: true })
  reviewedBy: number | null;

  @Column("datetime", { name: "reviewed_date", nullable: true })
  reviewedDate: Date | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => InvoiceReversalItems,
    (invoiceReversalItems) => invoiceReversalItems.invoiceReversal
  )
  invoiceReversalItems: InvoiceReversalItems[];

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceReversals, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => InvoiceStatuses,
    (invoiceStatuses) => invoiceStatuses.invoiceReversals,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_status_id", referencedColumnName: "id" }])
  invoiceStatus: InvoiceStatuses;

  @ManyToOne(() => Users, (users) => users.invoiceReversals, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "reviewed_by", referencedColumnName: "id" }])
  reviewedBy2: Users;
}
