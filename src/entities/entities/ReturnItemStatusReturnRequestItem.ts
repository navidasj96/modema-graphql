import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ReturnRequestItems } from "./ReturnRequestItems";
import { ReturnItemStatuses } from "./ReturnItemStatuses";
import { Users } from "./Users";

@Index(
  "return_item_status_return_request_item_idx_item",
  ["returnRequestItemId"],
  {}
)
@Index(
  "return_item_status_return_request_item_idx_status",
  ["returnItemStatusId"],
  {}
)
@Index("return_item_status_return_request_item_idx_user_id", ["userId"], {})
@Entity("return_item_status_return_request_item", { schema: "modema" })
export class ReturnItemStatusReturnRequestItem {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "return_request_item_id", unsigned: true })
  returnRequestItemId: number;

  @Column("int", { name: "return_item_status_id", unsigned: true })
  returnItemStatusId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => ReturnRequestItems,
    (returnRequestItems) =>
      returnRequestItems.returnItemStatusReturnRequestItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_request_item_id", referencedColumnName: "id" }])
  returnRequestItem: ReturnRequestItems;

  @ManyToOne(
    () => ReturnItemStatuses,
    (returnItemStatuses) =>
      returnItemStatuses.returnItemStatusReturnRequestItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "return_item_status_id", referencedColumnName: "id" }])
  returnItemStatus: ReturnItemStatuses;

  @ManyToOne(() => Users, (users) => users.returnItemStatusReturnRequestItems, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
