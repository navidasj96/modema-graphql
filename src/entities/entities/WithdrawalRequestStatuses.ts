import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { WithdrawalRequests } from "./WithdrawalRequests";

@Entity("withdrawal_request_statuses", { schema: "mydatabase" })
export class WithdrawalRequestStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "status", length: 191 })
  status: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => WithdrawalRequests,
    (withdrawalRequests) => withdrawalRequests.withdrawalRequestStatus
  )
  withdrawalRequests: WithdrawalRequests[];
}
