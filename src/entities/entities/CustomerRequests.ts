import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CustomerRequestFiles } from "./CustomerRequestFiles";
import { Users } from "./Users";

@Index("customer_requests_user_id_index", ["userId"], {})
@Entity("customer_requests", { schema: "mydatabase" })
export class CustomerRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "uuid", nullable: true, length: 192 })
  uuid: string | null;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @Column("varchar", { name: "phone", nullable: true, length: 191 })
  phone: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => CustomerRequestFiles,
    (customerRequestFiles) => customerRequestFiles.customerRequest
  )
  customerRequestFiles: CustomerRequestFiles[];

  @ManyToOne(() => Users, (users) => users.customerRequests, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
