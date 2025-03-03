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
import { Users } from "./Users";
import { Invoices } from "./Invoices";
import { ReturnRequests } from "./ReturnRequests";
import { ReturnStatuses } from "./ReturnStatuses";
import { ReturnTypes } from "./ReturnTypes";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";

@Index("return_request_histories_editor_user_id_index", ["editorUserId"], {})
@Index("return_request_histories_invoice_id_index", ["invoiceId"], {})
@Index("return_request_histories_parent_id_unique", ["parentId"], {
  unique: true,
})
@Index("return_request_histories_request_date_index", ["requestDate"], {})
@Index(
  "return_request_histories_return_request_id_index",
  ["returnRequestId"],
  {}
)
@Index(
  "return_request_histories_return_status_id_index",
  ["returnStatusId"],
  {}
)
@Index("return_request_histories_return_type_id_index", ["returnTypeId"], {})
@Index("return_request_histories_user_id_index", ["userId"], {})
@Entity("return_request_histories", { schema: "mydatabase" })
export class ReturnRequestHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "editor_user_id", unsigned: true })
  editorUserId: number;

  @Column("int", { name: "return_request_id", unsigned: true })
  returnRequestId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("date", { name: "request_date" })
  requestDate: string;

  @Column("varchar", { name: "request_number", length: 191 })
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
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable: string | null;

  @Column("decimal", {
    name: "user_blocked",
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked: string | null;

  @Column("decimal", {
    name: "modema_blocked",
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.returnRequestHistories, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "editor_user_id", referencedColumnName: "id" }])
  editorUser: Users;

  @ManyToOne(() => Invoices, (invoices) => invoices.returnRequestHistories, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;

  @OneToOne(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnRequestHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "parent_id", referencedColumnName: "id" }])
  parent: ReturnRequests;

  @ManyToOne(
    () => ReturnStatuses,
    (returnStatuses) => returnStatuses.returnRequestHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_status_id", referencedColumnName: "id" }])
  returnStatus: ReturnStatuses;

  @ManyToOne(
    () => ReturnTypes,
    (returnTypes) => returnTypes.returnRequestHistories,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_type_id", referencedColumnName: "id" }])
  returnType: ReturnTypes;

  @ManyToOne(() => Users, (users) => users.returnRequestHistories2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) =>
      returnRequestItemHistories.returnRequestHistory
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];
}
