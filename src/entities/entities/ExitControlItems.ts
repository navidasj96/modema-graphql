import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ExitControls } from "./ExitControls";
import { InvoiceProductItems } from "./InvoiceProductItems";

@Index("exit_control_items_exit_control_id_index", ["exitControlId"], {})
@Index(
  "exit_control_items_invoice_product_item_id_index",
  ["invoiceProductItemId"],
  {}
)
@Entity("exit_control_items", { schema: "mydatabase" })
export class ExitControlItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "exit_control_id", unsigned: true })
  exitControlId: number;

  @Column("int", { name: "invoice_product_item_id", unsigned: true })
  invoiceProductItemId: number;

  @Column("int", { name: "box_no" })
  boxNo: number;

  @Column("tinyint", { name: "carpet_scanned", width: 1, default: () => "'0'" })
  carpetScanned: boolean;

  @Column("tinyint", {
    name: "carpet_pad_scanned",
    width: 1,
    default: () => "'0'",
  })
  carpetPadScanned: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ExitControls,
    (exitControls) => exitControls.exitControlItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "exit_control_id", referencedColumnName: "id" }])
  exitControl: ExitControls;

  @ManyToOne(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.exitControlItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_product_item_id", referencedColumnName: "id" }])
  invoiceProductItem: InvoiceProductItems;
}
