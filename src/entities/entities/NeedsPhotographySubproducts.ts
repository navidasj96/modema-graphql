import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Subproducts } from "./Subproducts";

@Index(
  "needs_photography_subproducts_announced_user_id_index",
  ["announcedUserId"],
  {}
)
@Index(
  "needs_photography_subproducts_photography_user_id_index",
  ["photographyUserId"],
  {}
)
@Index(
  "needs_photography_subproducts_subproduct_id_index",
  ["subproductId"],
  {}
)
@Entity("needs_photography_subproducts", { schema: "mydatabase" })
export class NeedsPhotographySubproducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "subproduct_id", unsigned: true })
  subproductId: number;

  @Column("datetime", { name: "announced_date", nullable: true })
  announcedDate: Date | null;

  @Column("datetime", { name: "photography_date", nullable: true })
  photographyDate: Date | null;

  @Column("int", { name: "announced_user_id", nullable: true, unsigned: true })
  announcedUserId: number | null;

  @Column("int", {
    name: "photography_user_id",
    nullable: true,
    unsigned: true,
  })
  photographyUserId: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.needsPhotographySubproducts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "announced_user_id", referencedColumnName: "id" }])
  announcedUser: Users;

  @ManyToOne(() => Users, (users) => users.needsPhotographySubproducts2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "photography_user_id", referencedColumnName: "id" }])
  photographyUser: Users;

  @ManyToOne(
    () => Subproducts,
    (subproducts) => subproducts.needsPhotographySubproducts,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "subproduct_id", referencedColumnName: "id" }])
  subproduct: Subproducts;
}
