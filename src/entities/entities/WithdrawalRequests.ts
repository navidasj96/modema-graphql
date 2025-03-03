import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { WithdrawalRequestStatuses } from "./WithdrawalRequestStatuses";

@Index("withdrawal_requests_confirmed_by_index", ["confirmedBy"], {})
@Index("withdrawal_requests_user_id_index", ["userId"], {})
@Index(
  "withdrawal_requests_withdrawal_request_status_id_index",
  ["withdrawalRequestStatusId"],
  {}
)
@Entity("withdrawal_requests", { schema: "mydatabase" })
export class WithdrawalRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "withdrawal_request_status_id", unsigned: true })
  withdrawalRequestStatusId: number;

  @Column("decimal", { name: "amount", precision: 18, scale: 2 })
  amount: string;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "card_no", length: 191 })
  cardNo: string;

  @Column("varchar", {
    name: "money_transfer_ref_code",
    nullable: true,
    length: 191,
  })
  moneyTransferRefCode: string | null;

  @Column("varchar", {
    name: "money_transfer_from_bank",
    nullable: true,
    length: 191,
  })
  moneyTransferFromBank: string | null;

  @Column("int", { name: "confirmed_by", nullable: true, unsigned: true })
  confirmedBy: number | null;

  @Column("datetime", { name: "confirmed_at", nullable: true })
  confirmedAt: Date | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.withdrawalRequests, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "confirmed_by", referencedColumnName: "id" }])
  confirmedBy2: Users;

  @ManyToOne(() => Users, (users) => users.withdrawalRequests2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(
    () => WithdrawalRequestStatuses,
    (withdrawalRequestStatuses) => withdrawalRequestStatuses.withdrawalRequests,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "withdrawal_request_status_id", referencedColumnName: "id" },
  ])
  withdrawalRequestStatus: WithdrawalRequestStatuses;
}
