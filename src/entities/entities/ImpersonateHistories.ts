import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index(
  "impersonate_histories_impersonate_user_id_index",
  ["impersonateUserId"],
  {}
)
@Index("impersonate_histories_user_id_index", ["userId"], {})
@Entity("impersonate_histories", { schema: "modema" })
export class ImpersonateHistories {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "impersonate_user_id", unsigned: true })
  impersonateUserId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.impersonateHistories, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "impersonate_user_id", referencedColumnName: "id" }])
  impersonateUser: Users;

  @ManyToOne(() => Users, (users) => users.impersonateHistories2, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
