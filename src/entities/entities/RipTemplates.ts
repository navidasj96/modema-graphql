import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PrintRips } from "./PrintRips";
import { RipTemplateItems } from "./RipTemplateItems";
import { Users } from "./Users";

@Index("rip_templates_user_id_index", ["userId"], {})
@Entity("rip_templates", { schema: "mydatabase" })
export class RipTemplates {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @OneToMany(() => PrintRips, (printRips) => printRips.ripTemplate)
  printRips: PrintRips[];

  @OneToMany(
    () => RipTemplateItems,
    (ripTemplateItems) => ripTemplateItems.ripTemplate
  )
  ripTemplateItems: RipTemplateItems[];

  @ManyToOne(() => Users, (users) => users.ripTemplates, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
