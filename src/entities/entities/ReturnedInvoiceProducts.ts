import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceProducts } from "./InvoiceProducts";
import { Products } from "./Products";
import { ReturnedInvoices } from "./ReturnedInvoices";
import { Subproducts } from "./Subproducts";

@Index(
  "returned_invoice_products_invoice_product_id_index",
  ["invoiceProductId"],
  {}
)
@Index("returned_invoice_products_product_id_index", ["productId"], {})
@Index(
  "returned_invoice_products_returned_invoice_id_index",
  ["returnedInvoiceId"],
  {}
)
@Index("returned_invoice_products_subproduct_id_index", ["subproductId"], {})
@Entity("returned_invoice_products", { schema: "modema" })
export class ReturnedInvoiceProducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "returned_invoice_id", unsigned: true })
  returnedInvoiceId: number;

  @Column("int", { name: "invoice_product_id", unsigned: true })
  invoiceProductId: number;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("int", { name: "count", default: () => "'1'" })
  count: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.returnedInvoiceProducts,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_product_id", referencedColumnName: "id" }])
  invoiceProduct: InvoiceProducts;

  @ManyToOne(() => Products, (products) => products.returnedInvoiceProducts, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(
    () => ReturnedInvoices,
    (returnedInvoices) => returnedInvoices.returnedInvoiceProducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "returned_invoice_id", referencedColumnName: "id" }])
  returnedInvoice: ReturnedInvoices;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.returnedInvoiceProducts,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
