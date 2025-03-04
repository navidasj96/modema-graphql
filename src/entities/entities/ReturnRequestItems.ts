import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnItemStatusReturnRequestItem } from "./ReturnItemStatusReturnRequestItem";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";
import { ReturnRequestItemImages } from "./ReturnRequestItemImages";
import { ReturnRequestItemReturnItemStatus } from "./ReturnRequestItemReturnItemStatus";
import { ReturnRequestItemVideos } from "./ReturnRequestItemVideos";
import { InvoiceProducts } from "./InvoiceProducts";
import { Products } from "./Products";
import { ReturnItemStatuses } from "./ReturnItemStatuses";
import { ReturnReasons } from "./ReturnReasons";
import { ReturnRequests } from "./ReturnRequests";
import { Subproducts } from "./Subproducts";

@Index("code", ["code"], { unique: true })
@Index("code_2", ["code"], { unique: true })
@Index("invoice_product_id", ["invoiceProductId"], {})
@Index("return_request_items_product_id_index", ["productId"], {})
@Index(
  "return_request_items_return_item_status_id_index",
  ["returnItemStatusId"],
  {}
)
@Index("return_request_items_return_reason_id_index", ["returnReasonId"], {})
@Index("return_request_items_return_request_id_index", ["returnRequestId"], {})
@Index("return_request_items_subproduct_id_index", ["subproductId"], {})
@Entity("return_request_items", { schema: "modema" })
export class ReturnRequestItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "return_request_id", unsigned: true })
  returnRequestId: number;

  @Column("varchar", {
    name: "code",
    nullable: true,
    unique: true,
    length: 191,
  })
  code: string | null;

  @Column("int", { name: "row_no", nullable: true, unsigned: true })
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

  @OneToMany(
    () => ReturnItemStatusReturnRequestItem,
    (returnItemStatusReturnRequestItem) =>
      returnItemStatusReturnRequestItem.returnRequestItem
  )
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) => returnRequestItemHistories.returnRequestItem
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @OneToMany(
    () => ReturnRequestItemImages,
    (returnRequestItemImages) => returnRequestItemImages.returnRequestItem
  )
  returnRequestItemImages: ReturnRequestItemImages[];

  @OneToMany(
    () => ReturnRequestItemReturnItemStatus,
    (returnRequestItemReturnItemStatus) =>
      returnRequestItemReturnItemStatus.returnRequestItem
  )
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @OneToMany(
    () => ReturnRequestItemVideos,
    (returnRequestItemVideos) => returnRequestItemVideos.returnRequestItem
  )
  returnRequestItemVideos: ReturnRequestItemVideos[];

  @ManyToOne(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.returnRequestItems,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "invoice_product_id", referencedColumnName: "id" }])
  invoiceProduct: InvoiceProducts;

  @ManyToOne(() => Products, (products) => products.returnRequestItems, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "id" }])
  product: Products;

  @ManyToOne(
    () => ReturnItemStatuses,
    (returnItemStatuses) => returnItemStatuses.returnRequestItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_item_status_id", referencedColumnName: "id" }])
  returnItemStatus: ReturnItemStatuses;

  @ManyToOne(
    () => ReturnReasons,
    (returnReasons) => returnReasons.returnRequestItems,
    { onDelete: "SET NULL", onUpdate: "SET NULL" }
  )
  @JoinColumn([{ name: "return_reason_id", referencedColumnName: "id" }])
  returnReason: ReturnReasons;

  @ManyToOne(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnRequestItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_id", referencedColumnName: "id" }])
  returnRequest: ReturnRequests;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.returnRequestItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
