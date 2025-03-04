import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ContactForms } from "./ContactForms";

@Index("departments_name_unique", ["name"], { unique: true })
@Entity("departments", { schema: "modema" })
export class Departments {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("varchar", { name: "name_en", nullable: true, length: 191 })
  nameEn: string | null;

  @OneToMany(() => ContactForms, (contactForms) => contactForms.department)
  contactForms: ContactForms[];
}
