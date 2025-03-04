import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Designs } from "./Designs";

@Index("carpet_materials_name_unique", ["name"], { unique: true })
@Entity("carpet_materials", { schema: "modema" })
export class CarpetMaterials {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("double", { name: "price_per_inch", unsigned: true, precision: 22 })
  pricePerInch: number;

  @Column("int", { name: "sort_order", nullable: true, unsigned: true })
  sortOrder: number | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Designs, (designs) => designs.carpetMaterial)
  designs: Designs[];
}
