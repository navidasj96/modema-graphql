import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Images } from "./Images";
import { Users } from "./Users";

@Index("help_desks_image_id_index", ["imageId"], {})
@Index("help_desks_user_id_unique", ["userId"], { unique: true })
@Entity("help_desks", { schema: "mydatabase" })
export class HelpDesks {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("int", { name: "user_id", unique: true, unsigned: true })
  userId: number;

  @Column("varchar", { name: "title", nullable: true, length: 191 })
  title: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 191 })
  phone: string | null;

  @Column("int", { name: "image_id", nullable: true, unsigned: true })
  imageId: number | null;

  @Column("int", { name: "is_online", nullable: true })
  isOnline: number | null;

  @Column("int", { name: "is_active", nullable: true })
  isActive: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Images, (images) => images.helpDesks, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "image_id", referencedColumnName: "id" }])
  image: Images;

  @OneToOne(() => Users, (users) => users.helpDesks, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
