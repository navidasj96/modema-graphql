import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("model_visits_model_id_index", ["modelId"], {})
@Index("model_visits_model_name_index", ["modelName"], {})
@Index("model_visits_user_id_index", ["userId"], {})
@Entity("model_visits", { schema: "mydatabase" })
export class ModelVisits {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "user_id", unsigned: true })
  userId: number;

  @Column("varchar", { name: "model_name", length: 191 })
  modelName: string;

  @Column("int", { name: "model_id", unsigned: true })
  modelId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Users, (users) => users.modelVisits, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
