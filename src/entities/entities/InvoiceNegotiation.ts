import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { Negotiations } from "./Negotiations";

@Index("invoice_negotiation_invoice_id_index", ["invoiceId"], {})
@Index("invoice_negotiation_negotiation_id_index", ["negotiationId"], {})
@Entity("invoice_negotiation", { schema: "mydatabase" })
export class InvoiceNegotiation {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "negotiation_id", unsigned: true })
  negotiationId: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceNegotiations, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => Negotiations,
    (negotiations) => negotiations.invoiceNegotiations,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "negotiation_id", referencedColumnName: "id" }])
  negotiation: Negotiations;
}
