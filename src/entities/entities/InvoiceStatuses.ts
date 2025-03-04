import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceInvoiceStatus } from "./InvoiceInvoiceStatus";
import { InvoiceReversals } from "./InvoiceReversals";
import { Invoices } from "./Invoices";

@Entity("invoice_statuses", { schema: "modema" })
export class InvoiceStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "status", length: 191 })
  status: string;

  @Column("varchar", { name: "color", nullable: true, length: 191 })
  color: string | null;

  @Column("text", { name: "notification_numbers", nullable: true })
  notificationNumbers: string | null;

  @Column("text", { name: "notification_emails", nullable: true })
  notificationEmails: string | null;

  @Column("tinyint", {
    name: "sms_to_customer",
    nullable: true,
    width: 1,
    default: () => "'0'",
  })
  smsToCustomer: boolean | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => InvoiceInvoiceStatus,
    (invoiceInvoiceStatus) => invoiceInvoiceStatus.invoiceStatus
  )
  invoiceInvoiceStatuses: InvoiceInvoiceStatus[];

  @OneToMany(
    () => InvoiceReversals,
    (invoiceReversals) => invoiceReversals.invoiceStatus
  )
  invoiceReversals: InvoiceReversals[];

  @OneToMany(() => Invoices, (invoices) => invoices.currentInvoiceStatus)
  invoices: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.lockState2)
  invoices2: Invoices[];
}
