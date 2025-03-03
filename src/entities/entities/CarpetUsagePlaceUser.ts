import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarpetUsagePlaces } from "./CarpetUsagePlaces";
import { Users } from "./Users";

@Index(
  "carpet_usage_place_user_carpet_usage_place_id_index",
  ["carpetUsagePlaceId"],
  {}
)
@Index("carpet_usage_place_user_user_id_index", ["userId"], {})
@Entity("carpet_usage_place_user", { schema: "mydatabase" })
export class CarpetUsagePlaceUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "carpet_usage_place_id", unsigned: true })
  carpetUsagePlaceId: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => CarpetUsagePlaces,
    (carpetUsagePlaces) => carpetUsagePlaces.carpetUsagePlaceUsers,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "carpet_usage_place_id", referencedColumnName: "id" }])
  carpetUsagePlace: CarpetUsagePlaces;

  @ManyToOne(() => Users, (users) => users.carpetUsagePlaceUsers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
