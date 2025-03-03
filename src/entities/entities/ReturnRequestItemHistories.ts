import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnRequestHistories } from "./ReturnRequestHistories";
import { InvoiceProducts } from "./InvoiceProducts";
import { Products } from "./Products";
import { ReturnItemStatuses } from "./ReturnItemStatuses";
import { ReturnReasons } from "./ReturnReasons";
import { ReturnRequests } from "./ReturnRequests";
import { ReturnRequestItems } from "./ReturnRequestItems";
import { Subproducts } from "./Subproducts";

@Index("return_request_history_id", ["returnRequestHistoryId"], {})
@Index(
  "return_request_item_histories_invoice_product_id_foreign",
  ["invoiceProductId"],
  {}
)
@Index("return_request_item_histories_product_id_index", ["productId"], {})
@Index(
  "return_request_item_histories_return_item_status_id_index",
  ["returnItemStatusId"],
  {}
)
@Index(
  "return_request_item_histories_return_reason_id_index",
  ["returnReasonId"],
  {}
)
@Index(
  "return_request_item_histories_return_request_id_index",
  ["returnRequestId"],
  {}
)
@Index(
  "return_request_item_histories_return_request_item_id_index",
  ["returnRequestItemId"],
  {}
)
@Index(
  "return_request_item_histories_subproduct_id_index",
  ["subproductId"],
  {}
)
@Entity("return_request_item_histories", { schema: "mydatabase" })
export class ReturnRequestItemHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", {
    name: "return_request_history_id",
    nullable: true,
    unsigned: true,
  })
  returnRequestHistoryId: number | null;

  @Column("int", { name: "return_request_item_id", unsigned: true })
  returnRequestItemId: number;

  @Column("int", { name: "return_request_id", unsigned: true })
  returnRequestId: number;

  @Column("varchar", { name: "code", nullable: true, length: 191 })
  code: string | null;

  @Column("int", { name: "row_no", nullable: true })
  rowNo: number | null;

  @Column("int", { name: "product_id", unsigned: true })
  productId: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("int", { name: "invoice_product_id", nullable: true, unsigned: true })
  invoiceProductId: number | null;

  @Column("tinyint", { name: "count", unsigned: true, default: () => "'0'" })
  count: number;

  @Column("int", {
    name: "return_item_status_id",
    nullable: true,
    unsigned: true,
  })
  returnItemStatusId: number | null;

  @Column("int", { name: "return_reason_id", nullable: true, unsigned: true })
  returnReasonId: number | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("text", { name: "description_sales", nullable: true })
  descriptionSales: string | null;

  @Column("text", { name: "description_factory", nullable: true })
  descriptionFactory: string | null;

  @Column("text", { name: "description_accounting", nullable: true })
  descriptionAccounting: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ReturnRequestHistories,
    (returnRequestHistories) =>
      returnRequestHistories.returnRequestItemHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "return_request_history_id", referencedColumnName: "id" },
  ])
  returnRequestHistory: ReturnRequestHistories;

  @ManyToOne(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.returnRequestItemHistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "invoice_product_id", referencedColumnName: "id" }])
  invoiceProduct: InvoiceProducts;

  @ManyToOne(
    () => Products,
    (products) => products.returnRequestItemHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(
    () => ReturnItemStatuses,
    (returnItemStatuses) => returnItemStatuses.returnRequestItemHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_item_status_id", referencedColumnName: "id" }])
  returnItemStatus: ReturnItemStatuses;

  @ManyToOne(
    () => ReturnReasons,
    (returnReasons) => returnReasons.returnRequestItemHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_reason_id", referencedColumnName: "id" }])
  returnReason: ReturnReasons;

  @ManyToOne(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnRequestItemHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_id", referencedColumnName: "id" }])
  returnRequest: ReturnRequests;

  @ManyToOne(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.returnRequestItemHistories,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_item_id", referencedColumnName: "id" }])
  returnRequestItem: ReturnRequestItems;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.returnRequestItemHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
