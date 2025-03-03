import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { ShippingServices } from "./ShippingServices";

@Index("invoice_shipping_rates_invoice_id_index", ["invoiceId"], {})
@Index(
  "invoice_shipping_rates_shipping_service_id_index",
  ["shippingServiceId"],
  {}
)
@Entity("invoice_shipping_rates", { schema: "mydatabase" })
export class InvoiceShippingRates {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_id", unsigned: true })
  invoiceId: number;

  @Column("int", { name: "shipping_service_id", unsigned: true })
  shippingServiceId: number;

  @Column("decimal", {
    name: "shipping_rate",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  shippingRate: string;

  @Column("decimal", {
    name: "shipping_rate_cod",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRateCod: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Invoices, (invoices) => invoices.invoiceShippingRates, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @ManyToOne(
    () => ShippingServices,
    (shippingServices) => shippingServices.invoiceShippingRates,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "shipping_service_id", referencedColumnName: "id" }])
  shippingService: ShippingServices;
}
