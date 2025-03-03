import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { RipTemplates } from "./RipTemplates";

@Index(
  "rip_template_items_basic_carpet_size_id_index",
  ["basicCarpetSizeId"],
  {}
)
@Index("rip_template_items_rip_template_id_index", ["ripTemplateId"], {})
@Entity("rip_template_items", { schema: "mydatabase" })
export class RipTemplateItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "rip_template_id", unsigned: true })
  ripTemplateId: number;

  @Column("int", { name: "basic_carpet_size_id", unsigned: true })
  basicCarpetSizeId: number;

  @Column("double", { name: "width", unsigned: true, precision: 22 })
  width: number;

  @Column("double", { name: "length", unsigned: true, precision: 22 })
  length: number;

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.ripTemplateItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(
    () => RipTemplates,
    (ripTemplates) => ripTemplates.ripTemplateItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "rip_template_id", referencedColumnName: "id" }])
  ripTemplate: RipTemplates;
}
