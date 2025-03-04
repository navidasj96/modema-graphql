import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FileNegotiation } from "./FileNegotiation";
import { InvoiceNegotiation } from "./InvoiceNegotiation";
import { NegotiationHistories } from "./NegotiationHistories";
import { NegotiationSteps } from "./NegotiationSteps";
import { NegotiationStatuses } from "./NegotiationStatuses";
import { Users } from "./Users";

@Index("negotiations_customer_id_index", ["customerId"], {})
@Index("negotiations_name_index", ["name"], {})
@Index("negotiations_negotiation_status_id_index", ["negotiationStatusId"], {})
@Index("negotiations_negotiator_id_index", ["negotiatorId"], {})
@Index("negotiations_submitted_by_index", ["submittedBy"], {})
@Index("negotiations_tel_index", ["tel"], {})
@Entity("negotiations", { schema: "modema" })
export class Negotiations {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "submitted_by", unsigned: true })
  submittedBy: number;

  @Column("int", { name: "customer_id", nullable: true, unsigned: true })
  customerId: number | null;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("varchar", { name: "tel", nullable: true, length: 191 })
  tel: string | null;

  @Column("int", { name: "negotiator_id", unsigned: true })
  negotiatorId: number;

  @Column("int", { name: "negotiation_status_id", unsigned: true })
  negotiationStatusId: number;

  @Column("datetime", { name: "date_time" })
  dateTime: Date;

  @Column("int", { name: "priority", unsigned: true })
  priority: number;

  @Column("tinyint", { name: "is_read", width: 1, default: () => "'0'" })
  isRead: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => FileNegotiation,
    (fileNegotiation) => fileNegotiation.negotiation
  )
  fileNegotiations: FileNegotiation[];

  @OneToMany(
    () => InvoiceNegotiation,
    (invoiceNegotiation) => invoiceNegotiation.negotiation
  )
  invoiceNegotiations: InvoiceNegotiation[];

  @OneToMany(
    () => NegotiationHistories,
    (negotiationHistories) => negotiationHistories.negotiation
  )
  negotiationHistories: NegotiationHistories[];

  @OneToMany(
    () => NegotiationSteps,
    (negotiationSteps) => negotiationSteps.negotiation
  )
  negotiationSteps: NegotiationSteps[];

  @ManyToOne(
    () => NegotiationStatuses,
    (negotiationStatuses) => negotiationStatuses.negotiations,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "negotiation_status_id", referencedColumnName: "id" }])
  negotiationStatus: NegotiationStatuses;

  @ManyToOne(() => Users, (users) => users.negotiations, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "negotiator_id", referencedColumnName: "id" }])
  negotiator: Users;

  @ManyToOne(() => Users, (users) => users.negotiations2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "submitted_by", referencedColumnName: "id" }])
  submittedBy2: Users;
}
