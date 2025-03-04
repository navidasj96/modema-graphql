import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Addresses } from "./Addresses";
import { Invoices } from "./Invoices";
import { ShippingServices } from "./ShippingServices";

@Index("invoice_rates_results_address_id_index", ["addressId"], {})
@Index("invoice_rates_results_invoice_id_index", ["invoiceId"], {})
@Index(
  "invoice_rates_results_invoice_id_shipping_service_id_unique",
  ["invoiceId", "shippingServiceId"],
  { unique: true }
)
@Index(
  "invoice_rates_results_shipping_service_id_index",
  ["shippingServiceId"],
  {}
)
@Entity("invoice_rates_results", { schema: "modema" })
export class InvoiceRatesResults {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("int", { name: "address_id", unsigned: true })
  addressId: number;

  @Column("int", {
    name: "shipping_service_id",
    nullable: true,
    unsigned: true,
  })
  shippingServiceId: number | null;

  @Column("longtext", { name: "rates_reply_result", nullable: true })
  ratesReplyResult: string | null;

  @Column("longtext", { name: "rates_reply_cod_result", nullable: true })
  ratesReplyCodResult: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Addresses, (addresses) => addresses.invoiceRatesResults, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "address_id", referencedColumnName: "id" }])
  address: Addresses;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceRatesResults, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => ShippingServices,
    (shippingServices) => shippingServices.invoiceRatesResults,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_service_id", referencedColumnName: "id" }])
  shippingService: ShippingServices;
}
