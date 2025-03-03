import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";
import { Utms } from "./Utms";

@Index("user_utm_user_id_index", ["userId"], {})
@Index("user_utm_user_id_utm_id_unique", ["userId", "utmId"], { unique: true })
@Index("user_utm_utm_id_index", ["utmId"], {})
@Entity("user_utm", { schema: "mydatabase" })
export class UserUtm {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("int", { name: "utm_id", unsigned: true })
  utmId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.userUtms, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;

  @ManyToOne(() => Utms, (utms) => utms.userUtms, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "utm_id", referencedColumnName: "id" }])
  utm: Utms;
}
