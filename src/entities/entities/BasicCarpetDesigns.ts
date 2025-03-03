import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subproducts } from "./Subproducts";

@Index("basic_carpet_designs_code_unique", ["code"], { unique: true })
@Index("basic_carpet_designs_title_unique", ["title"], { unique: true })
@Index("sort_order", ["sortOrder"], {})
@Entity("basic_carpet_designs", { schema: "mydatabase" })
export class BasicCarpetDesigns {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "title", unique: true, length: 191 })
  title: string;

  @Column("varchar", { name: "code", unique: true, length: 4 })
  code: string;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @OneToMany(() => Subproducts, (subproducts) => subproducts.basicCarpetDesign)
  subproducts: Subproducts[];
}
