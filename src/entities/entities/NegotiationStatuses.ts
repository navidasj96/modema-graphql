import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { NegotiationHistories } from "./NegotiationHistories";
import { Negotiations } from "./Negotiations";

@Index("negotiation_statuses_name_index", ["name"], {})
@Entity("negotiation_statuses", { schema: "mydatabase" })
export class NegotiationStatuses {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => NegotiationHistories,
    (negotiationHistories) => negotiationHistories.negotiationStatus
  )
  negotiationHistories: NegotiationHistories[];

  @OneToMany(
    () => Negotiations,
    (negotiations) => negotiations.negotiationStatus
  )
  negotiations: Negotiations[];
}
