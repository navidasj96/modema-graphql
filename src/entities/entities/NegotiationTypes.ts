import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { NegotiationSteps } from "./NegotiationSteps";

@Index("negotiation_types_name_index", ["name"], {})
@Entity("negotiation_types", { schema: "mydatabase" })
export class NegotiationTypes {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => NegotiationSteps,
    (negotiationSteps) => negotiationSteps.negotiationType
  )
  negotiationSteps: NegotiationSteps[];
}
