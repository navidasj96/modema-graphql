import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Invoices } from "./Invoices";

@Entity("invoice_types", { schema: "mydatabase" })
export class InvoiceTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Invoices, (invoices) => invoices.invoiceType)
  invoices: Invoices[];
}
