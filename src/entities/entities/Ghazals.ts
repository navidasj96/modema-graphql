import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ghazals", { schema: "mydatabase" })
export class Ghazals {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("text", { name: "explanation", nullable: true })
  explanation: string | null;

  @Column("text", { name: "poem", nullable: true })
  poem: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
