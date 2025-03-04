import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { InvoiceHistories } from "./InvoiceHistories";
import { Invoices } from "./Invoices";
import { InvoicePayments } from "./InvoicePayments";
import { InvoicePaymentTypes } from "./InvoicePaymentTypes";

@Index("invoice_payment_histories_confirmed_by_index", ["confirmedBy"], {})
@Index(
  "invoice_payment_histories_invoice_history_id_index",
  ["invoiceHistoryId"],
  {}
)
@Index("invoice_payment_histories_invoice_id_index", ["invoiceId"], {})
@Index(
  "invoice_payment_histories_invoice_payment_id_index",
  ["invoicePaymentId"],
  {}
)
@Index(
  "invoice_payment_histories_invoice_payment_type_id_index",
  ["invoicePaymentTypeId"],
  {}
)
@Index("invoice_payment_histories_user_id_index", ["userId"], {})
@Entity("invoice_payment_histories", { schema: "modema" })
export class InvoicePaymentHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_payment_id", unsigned: true })
  invoicePaymentId: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("int", { name: "invoice_history_id", nullable: true, unsigned: true })
  invoiceHistoryId: number | null;

  @Column("int", { name: "invoice_payment_type_id", unsigned: true })
  invoicePaymentTypeId: number;

  @Column("decimal", {
    name: "amount",
    precision: 20,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string;

  @Column("tinyint", { name: "for_shipping", nullable: true, width: 1 })
  forShipping: boolean | null;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "ref_code", nullable: true, length: 191 })
  refCode: string | null;

  @Column("varchar", { name: "cheque_number", nullable: true, length: 191 })
  chequeNumber: string | null;

  @Column("varchar", { name: "cheque_bank", nullable: true, length: 191 })
  chequeBank: string | null;

  @Column("varchar", { name: "cheque_date", nullable: true, length: 191 })
  chequeDate: string | null;

  @Column("varchar", { name: "cheque_payee", nullable: true, length: 191 })
  chequePayee: string | null;

  @Column("tinyint", { name: "is_confirmed", nullable: true, width: 1 })
  isConfirmed: boolean | null;

  @Column("varchar", { name: "ref_code_sales", nullable: true, length: 191 })
  refCodeSales: string | null;

  @Column("int", { name: "confirmed_by", nullable: true, unsigned: true })
  confirmedBy: number | null;

  @Column("date", { name: "payment_date", nullable: true })
  paymentDate: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 191 })
  description: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.invoicePaymentHistories, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "confirmed_by", referencedColumnName: "id" }])
  confirmedBy2: Users;

  @ManyToOne(
    () => InvoiceHistories,
    (invoiceHistories) => invoiceHistories.invoicePaymentHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_history_id", referencedColumnName: "id" }])
  invoiceHistory: InvoiceHistories;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoicePaymentHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => InvoicePayments,
    (invoicePayments) => invoicePayments.invoicePaymentHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_payment_id", referencedColumnName: "id" }])
  invoicePayment: InvoicePayments;

  @ManyToOne(
    () => InvoicePaymentTypes,
    (invoicePaymentTypes) => invoicePaymentTypes.invoicePaymentHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_payment_type_id", referencedColumnName: "id" }])
  invoicePaymentType: InvoicePaymentTypes;

  @ManyToOne(() => Users, (users) => users.invoicePaymentHistories2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
