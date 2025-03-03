import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Negotiations } from "./Negotiations";
import { NegotiationTypes } from "./NegotiationTypes";
import { Users } from "./Users";

@Index("negotiation_steps_negotiation_id_index", ["negotiationId"], {})
@Index("negotiation_steps_negotiation_type_id_index", ["negotiationTypeId"], {})
@Index("negotiation_steps_submitted_by_index", ["submittedBy"], {})
@Entity("negotiation_steps", { schema: "mydatabase" })
export class NegotiationSteps {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "submitted_by", unsigned: true })
  submittedBy: number;

  @Column("int", { name: "negotiation_type_id", unsigned: true })
  negotiationTypeId: number;

  @Column("int", { name: "negotiation_id", unsigned: true })
  negotiationId: number;

  @Column("datetime", { name: "submitted_at" })
  submittedAt: Date;

  @Column("text", { name: "content" })
  content: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => Negotiations,
    (negotiations) => negotiations.negotiationSteps,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "negotiation_id", referencedColumnName: "id" }])
  negotiation: Negotiations;

  @ManyToOne(
    () => NegotiationTypes,
    (negotiationTypes) => negotiationTypes.negotiationSteps,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "negotiation_type_id", referencedColumnName: "id" }])
  negotiationType: NegotiationTypes;

  @ManyToOne(() => Users, (users) => users.negotiationSteps, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "submitted_by", referencedColumnName: "id" }])
  submittedBy2: Users;
}
