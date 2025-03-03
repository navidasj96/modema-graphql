import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { PaymentMethods } from "./PaymentMethods";

@Index(
  "payment_method_fields_idx1",
  ["paymentIdentifier", "paymentMethodId", "name"],
  { unique: true }
)
@Index("payment_method_fields_invoice_id_index", ["invoiceId"], {})
@Index("payment_method_fields_payment_method_id_index", ["paymentMethodId"], {})
@Entity("payment_method_fields", { schema: "mydatabase" })
export class PaymentMethodFields {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("int", { name: "payment_method_id", unsigned: true })
  paymentMethodId: number;

  @Column("varchar", { name: "payment_identifier", length: 191 })
  paymentIdentifier: string;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("longtext", { name: "value" })
  value: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Invoices, (invoices) => invoices.paymentMethodFields, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => PaymentMethods,
    (paymentMethods) => paymentMethods.paymentMethodFields,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "payment_method_id", referencedColumnName: "id" }])
  paymentMethod: PaymentMethods;
}
