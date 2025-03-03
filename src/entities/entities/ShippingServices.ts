import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceRatesResults } from "./InvoiceRatesResults";
import { InvoiceShippingRates } from "./InvoiceShippingRates";

@Index("fedex_services_code_unique", ["code"], { unique: true })
@Entity("shipping_services", { schema: "mydatabase" })
export class ShippingServices {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "code", unique: true, length: 191 })
  code: string;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("varchar", { name: "description", nullable: true, length: 191 })
  description: string | null;

  @Column("text", { name: "full_description", nullable: true })
  fullDescription: string | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @OneToMany(
    () => InvoiceRatesResults,
    (invoiceRatesResults) => invoiceRatesResults.shippingService
  )
  invoiceRatesResults: InvoiceRatesResults[];

  @OneToMany(
    () => InvoiceShippingRates,
    (invoiceShippingRates) => invoiceShippingRates.shippingService
  )
  invoiceShippingRates: InvoiceShippingRates[];
}
