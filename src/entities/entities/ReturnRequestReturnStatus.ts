import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnRequests } from "./ReturnRequests";
import { ReturnStatuses } from "./ReturnStatuses";
import { Users } from "./Users";

@Index(
  "return_request_return_status_return_request_id_index",
  ["returnRequestId"],
  {}
)
@Index(
  "return_request_return_status_return_status_id_index",
  ["returnStatusId"],
  {}
)
@Index("return_request_return_status_user_id_index", ["userId"], {})
@Entity("return_request_return_status", { schema: "mydatabase" })
export class ReturnRequestReturnStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "return_request_id", unsigned: true })
  returnRequestId: number;

  @Column("int", { name: "return_status_id", unsigned: true })
  returnStatusId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnRequestReturnStatuses,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_id", referencedColumnName: "id" }])
  returnRequest: ReturnRequests;

  @ManyToOne(
    () => ReturnStatuses,
    (returnStatuses) => returnStatuses.returnRequestReturnStatuses,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_status_id", referencedColumnName: "id" }])
  returnStatus: ReturnStatuses;

  @ManyToOne(() => Users, (users) => users.returnRequestReturnStatuses, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
