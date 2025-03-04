import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnRequestAddresses } from "./ReturnRequestAddresses";
import { ReturnRequestHistories } from "./ReturnRequestHistories";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";
import { ReturnRequestItems } from "./ReturnRequestItems";
import { ReturnRequestReturnStatus } from "./ReturnRequestReturnStatus";
import { Coupons } from "./Coupons";
import { Invoices } from "./Invoices";
import { ReturnStatuses } from "./ReturnStatuses";
import { ReturnTypes } from "./ReturnTypes";
import { Users } from "./Users";

@Index("return_requests_coupon_id_index", ["couponId"], {})
@Index("return_requests_invoice_id_index", ["invoiceId"], {})
@Index("return_requests_parent_id_unique", ["parentId"], { unique: true })
@Index("return_requests_request_date_index", ["requestDate"], {})
@Index("return_requests_request_number_unique", ["requestNumber"], {
  unique: true,
})
@Index("return_requests_return_status_id_index", ["returnStatusId"], {})
@Index("return_requests_return_type_id_index", ["returnTypeId"], {})
@Index("return_requests_user_id_index", ["userId"], {})
@Entity("return_requests", { schema: "modema" })
export class ReturnRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("date", { name: "request_date" })
  requestDate: string;

  @Column("varchar", { name: "request_number", unique: true, length: 191 })
  requestNumber: string;

  @Column("int", { name: "return_status_id", unsigned: true })
  returnStatusId: number;

  @Column("int", { name: "return_type_id", unsigned: true })
  returnTypeId: number;

  @Column("int", { name: "invoice_id", nullable: true, unsigned: true })
  invoiceId: number | null;

  @Column("int", {
    name: "parent_id",
    nullable: true,
    unique: true,
    unsigned: true,
  })
  parentId: number | null;

  @Column("varchar", {
    name: "tracking_code_customer",
    nullable: true,
    length: 191,
  })
  trackingCodeCustomer: string | null;

  @Column("varchar", {
    name: "shipping_service_customer",
    nullable: true,
    length: 191,
  })
  shippingServiceCustomer: string | null;

  @Column("varchar", {
    name: "tracking_code_modema",
    nullable: true,
    length: 191,
  })
  trackingCodeModema: string | null;

  @Column("varchar", {
    name: "shipping_service_modema",
    nullable: true,
    length: 191,
  })
  shippingServiceModema: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("decimal", {
    name: "withdrawable",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable: string;

  @Column("decimal", {
    name: "user_blocked",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked: string;

  @Column("decimal", {
    name: "modema_blocked",
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked: string;

  @Column("decimal", {
    name: "coupon_amount",
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  couponAmount: string | null;

  @Column("int", { name: "coupon_id", nullable: true, unsigned: true })
  couponId: number | null;

  @Column("tinyint", {
    name: "submitted_by_factory",
    width: 1,
    default: () => "'0'",
  })
  submittedByFactory: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ReturnRequestAddresses,
    (returnRequestAddresses) => returnRequestAddresses.returnRequest
  )
  returnRequestAddresses: ReturnRequestAddresses[];

  @OneToOne(
    () => ReturnRequestHistories,
    (returnRequestHistories) => returnRequestHistories.parent
  )
  returnRequestHistories: ReturnRequestHistories;

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) => returnRequestItemHistories.returnRequest
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @OneToMany(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.returnRequest
  )
  returnRequestItems: ReturnRequestItems[];

  @OneToMany(
    () => ReturnRequestReturnStatus,
    (returnRequestReturnStatus) => returnRequestReturnStatus.returnRequest
  )
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @ManyToOne(() => Coupons, (coupons) => coupons.returnRequests, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "coupon_id", referencedColumnName: "id" }])
  coupon: Coupons;

  @ManyToOne(() => Invoices, (invoices) => invoices.returnRequests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @OneToOne(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnRequests,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: ReturnRequests;

  @OneToOne(() => ReturnRequests, (returnRequests) => returnRequests.parent)
  returnRequests: ReturnRequests;

  @ManyToOne(
    () => ReturnStatuses,
    (returnStatuses) => returnStatuses.returnRequests,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_status_id", referencedColumnName: "id" }])
  returnStatus: ReturnStatuses;

  @ManyToOne(() => ReturnTypes, (returnTypes) => returnTypes.returnRequests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "return_type_id", referencedColumnName: "id" }])
  returnType: ReturnTypes;

  @ManyToOne(() => Users, (users) => users.returnRequests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
