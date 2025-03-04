import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PaymentRequests } from "./PaymentRequests";

@Entity("payment_request_statuses", { schema: "modema" })
export class PaymentRequestStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @OneToMany(
    () => PaymentRequests,
    (paymentRequests) => paymentRequests.paymentRequestStatus
  )
  paymentRequests: PaymentRequests[];
}
