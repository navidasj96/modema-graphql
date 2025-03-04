import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnRequestHistories } from "./ReturnRequestHistories";
import { ReturnRequestReturnStatus } from "./ReturnRequestReturnStatus";
import { ReturnRequests } from "./ReturnRequests";

@Index("return_statuses_name_unique", ["name"], { unique: true })
@Entity("return_statuses", { schema: "modema" })
export class ReturnStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("int", { name: "step_test", nullable: true })
  stepTest: number | null;

  @Column("int", { name: "step_guarantee", nullable: true })
  stepGuarantee: number | null;

  @Column("int", { name: "sort_order", default: () => "'1'" })
  sortOrder: number;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ReturnRequestHistories,
    (returnRequestHistories) => returnRequestHistories.returnStatus
  )
  returnRequestHistories: ReturnRequestHistories[];

  @OneToMany(
    () => ReturnRequestReturnStatus,
    (returnRequestReturnStatus) => returnRequestReturnStatus.returnStatus
  )
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @OneToMany(
    () => ReturnRequests,
    (returnRequests) => returnRequests.returnStatus
  )
  returnRequests: ReturnRequests[];
}
