import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("subscribers_email_unique", ["email"], { unique: true })
@Entity("subscribers", { schema: "mydatabase" })
export class Subscribers {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", {
    name: "email",
    nullable: true,
    unique: true,
    length: 191,
  })
  email: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 191 })
  mobile: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;
}
