import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("mellat_payment_errors", { schema: "modema" })
export class MellatPaymentErrors {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "code", nullable: true, length: 191 })
  code: string | null;

  @Column("varchar", { name: "message", nullable: true, length: 191 })
  message: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
