import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { PaymentRequestStatuses } from "./PaymentRequestStatuses";
import { Visitors } from "./Visitors";

@Index("payment_requests_admin_user_id_index", ["adminUserId"], {})
@Index(
  "payment_requests_payment_request_status_id_index",
  ["paymentRequestStatusId"],
  {}
)
@Index("payment_requests_visitor_id_index", ["visitorId"], {})
@Entity("payment_requests", { schema: "mydatabase" })
export class PaymentRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "visitor_id", unsigned: true })
  visitorId: number;

  @Column("int", { name: "admin_user_id", nullable: true, unsigned: true })
  adminUserId: number | null;

  @Column("int", {
    name: "payment_request_status_id",
    unsigned: true,
    default: () => "'1'",
  })
  paymentRequestStatusId: number;

  @Column("decimal", {
    name: "amount",
    nullable: true,
    precision: 18,
    scale: 2,
  })
  amount: string | null;

  @Column("text", { name: "message", nullable: true })
  message: string | null;

  @Column("varchar", {
    name: "bank_account_number",
    nullable: true,
    length: 191,
  })
  bankAccountNumber: string | null;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.paymentRequests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "admin_user_id", referencedColumnName: "id" }])
  adminUser: Users;

  @ManyToOne(
    () => PaymentRequestStatuses,
    (paymentRequestStatuses) => paymentRequestStatuses.paymentRequests,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "payment_request_status_id", referencedColumnName: "id" },
  ])
  paymentRequestStatus: PaymentRequestStatuses;

  @ManyToOne(() => Visitors, (visitors) => visitors.paymentRequests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "visitor_id", referencedColumnName: "id" }])
  visitor: Visitors;
}
