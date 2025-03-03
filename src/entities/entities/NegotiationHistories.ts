import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Negotiations } from "./Negotiations";
import { NegotiationStatuses } from "./NegotiationStatuses";
import { Users } from "./Users";

@Index("negotiation_histories_negotiation_id_index", ["negotiationId"], {})
@Index(
  "negotiation_histories_negotiation_status_id_index",
  ["negotiationStatusId"],
  {}
)
@Index("negotiation_histories_new_negotiator_id_index", ["newNegotiatorId"], {})
@Index("negotiation_histories_old_negotiator_id_index", ["oldNegotiatorId"], {})
@Index("negotiation_histories_submitted_by_index", ["submittedBy"], {})
@Entity("negotiation_histories", { schema: "mydatabase" })
export class NegotiationHistories {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "negotiation_id", unsigned: true })
  negotiationId: number;

  @Column("int", { name: "negotiation_status_id", unsigned: true })
  negotiationStatusId: number;

  @Column("int", { name: "submitted_by", unsigned: true })
  submittedBy: number;

  @Column("int", { name: "old_negotiator_id", unsigned: true })
  oldNegotiatorId: number;

  @Column("int", { name: "new_negotiator_id", unsigned: true })
  newNegotiatorId: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => Negotiations,
    (negotiations) => negotiations.negotiationHistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "negotiation_id", referencedColumnName: "id" }])
  negotiation: Negotiations;

  @ManyToOne(
    () => NegotiationStatuses,
    (negotiationStatuses) => negotiationStatuses.negotiationHistories,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "negotiation_status_id", referencedColumnName: "id" }])
  negotiationStatus: NegotiationStatuses;

  @ManyToOne(() => Users, (users) => users.negotiationHistories, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "new_negotiator_id", referencedColumnName: "id" }])
  newNegotiator: Users;

  @ManyToOne(() => Users, (users) => users.negotiationHistories2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "old_negotiator_id", referencedColumnName: "id" }])
  oldNegotiator: Users;

  @ManyToOne(() => Users, (users) => users.negotiationHistories3, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "submitted_by", referencedColumnName: "id" }])
  submittedBy2: Users;
}
