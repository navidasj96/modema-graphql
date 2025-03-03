import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnItemStatusReturnRequestItem } from "./ReturnItemStatusReturnRequestItem";
import { ReturnRequestItemHistories } from "./ReturnRequestItemHistories";
import { ReturnRequestItemReturnItemStatus } from "./ReturnRequestItemReturnItemStatus";
import { ReturnRequestItems } from "./ReturnRequestItems";

@Index("return_item_statuses_name_unique", ["name"], { unique: true })
@Entity("return_item_statuses", { schema: "mydatabase" })
export class ReturnItemStatuses {
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
    () => ReturnItemStatusReturnRequestItem,
    (returnItemStatusReturnRequestItem) =>
      returnItemStatusReturnRequestItem.returnItemStatus
  )
  returnItemStatusReturnRequestItems: ReturnItemStatusReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestItemHistories,
    (returnRequestItemHistories) => returnRequestItemHistories.returnItemStatus
  )
  returnRequestItemHistories: ReturnRequestItemHistories[];

  @OneToMany(
    () => ReturnRequestItemReturnItemStatus,
    (returnRequestItemReturnItemStatus) =>
      returnRequestItemReturnItemStatus.returnItemStatus
  )
  returnRequestItemReturnItemStatuses: ReturnRequestItemReturnItemStatus[];

  @OneToMany(
    () => ReturnRequestItems,
    (returnRequestItems) => returnRequestItems.returnItemStatus
  )
  returnRequestItems: ReturnRequestItems[];
}
