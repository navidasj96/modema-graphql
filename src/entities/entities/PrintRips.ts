import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceProductItems } from "./InvoiceProductItems";
import { RipTemplates } from "./RipTemplates";
import { Users } from "./Users";

@Index("print_rips_rip_template_id_index", ["ripTemplateId"], {})
@Index("print_rips_user_id_index", ["userId"], {})
@Entity("print_rips", { schema: "modema" })
export class PrintRips {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "rip_number", length: 191 })
  ripNumber: string;

  @Column("int", { name: "rip_template_id", unsigned: true })
  ripTemplateId: number;

  @Column("int", { name: "user_id", nullable: true, unsigned: true })
  userId: number | null;

  @OneToMany(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.printRip
  )
  invoiceProductItems: InvoiceProductItems[];

  @ManyToOne(() => RipTemplates, (ripTemplates) => ripTemplates.printRips, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "rip_template_id", referencedColumnName: "id" }])
  ripTemplate: RipTemplates;

  @ManyToOne(() => Users, (users) => users.printRips, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
