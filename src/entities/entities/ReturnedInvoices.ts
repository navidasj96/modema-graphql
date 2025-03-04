import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnedInvoiceProducts } from "./ReturnedInvoiceProducts";
import { Invoices } from "./Invoices";
import { ReturnReasons } from "./ReturnReasons";
import { Users } from "./Users";

@Index("return_reason_id", ["returnReasonId"], {})
@Index("returned_invoices_invoice_id_index", ["invoiceId"], {})
@Index(
  "returned_invoices_replacement_invoice_id_index",
  ["replacementInvoiceId"],
  {}
)
@Index("returned_invoices_user_id_index", ["userId"], {})
@Entity("returned_invoices", { schema: "modema" })
export class ReturnedInvoices {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("int", {
    name: "replacement_invoice_id",
    nullable: true,
    unsigned: true,
  })
  replacementInvoiceId: number | null;

  @Column("int", { name: "return_reason_id", nullable: true, unsigned: true })
  returnReasonId: number | null;

  @Column("datetime", { name: "return_date", nullable: true })
  returnDate: Date | null;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("tinyint", { name: "snapp_informed", width: 1, default: () => "'0'" })
  snappInformed: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ReturnedInvoiceProducts,
    (returnedInvoiceProducts) => returnedInvoiceProducts.returnedInvoice
  )
  returnedInvoiceProducts: ReturnedInvoiceProducts[];

  @ManyToOne(() => Invoices, (invoices) => invoices.returnedInvoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(() => Invoices, (invoices) => invoices.returnedInvoices2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "replacement_invoice_id", referencedColumnName: "id" }])
  replacementInvoice: Invoices;

  @ManyToOne(
    () => ReturnReasons,
    (returnReasons) => returnReasons.returnedInvoices,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_reason_id", referencedColumnName: "id" }])
  returnReason: ReturnReasons;

  @ManyToOne(() => Users, (users) => users.returnedInvoices, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
