import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LabelProduct } from "./LabelProduct";

@Entity("labels", { schema: "modema" })
export class Labels {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "color", length: 191 })
  color: string;

  @Column("varchar", {
    name: "text_color",
    length: 191,
    default: () => "'#ffffff'",
  })
  textColor: string;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => LabelProduct, (labelProduct) => labelProduct.label)
  labelProducts: LabelProduct[];
}
