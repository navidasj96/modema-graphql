import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { PreorderRegisters } from "./PreorderRegisters";

@Index("invoice_bank_gateway_histories_invoice_id_foreign", ["invoiceId"], {})
@Index("invoice_bank_gateway_histories_invoice_id_index", ["invoiceId"], {})
@Index(
  "invoice_bank_gateway_histories_preorder_register_id_index",
  ["preorderRegisterId"],
  {}
)
@Entity("invoice_bank_gateway_histories", { schema: "modema" })
export class InvoiceBankGatewayHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_id", nullable: true, unsigned: true })
  invoiceId: number | null;

  @Column("varchar", { name: "ref_id", nullable: true, length: 191 })
  refId: string | null;

  @Column("varchar", { name: "order_id", nullable: true, length: 191 })
  orderId: string | null;

  @Column("varchar", { name: "sale_ref_id", nullable: true, length: 191 })
  saleRefId: string | null;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  amount: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", {
    name: "preorder_register_id",
    nullable: true,
    unsigned: true,
  })
  preorderRegisterId: number | null;

  @ManyToOne(
    () => Invoices,
    (invoices) => invoices.invoiceBankGatewayHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => PreorderRegisters,
    (preorderRegisters) => preorderRegisters.invoiceBankGatewayHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "preorder_register_id", referencedColumnName: "id" }])
  preorderRegister: PreorderRegisters;
}
