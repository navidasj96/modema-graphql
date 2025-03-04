import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Designs } from "./Designs";

@Index("text_layers_design_id_index", ["designId"], {})
@Entity("text_layers", { schema: "modema" })
export class TextLayers {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "design_id", unsigned: true })
  designId: number;

  @Column("double", {
    name: "center_x",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  centerX: number;

  @Column("double", {
    name: "center_y",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  centerY: number;

  @Column("double", {
    name: "scale_x",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  scaleX: number;

  @Column("double", {
    name: "scale_y",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  scaleY: number;

  @Column("int", { name: "sort_order", default: () => "'1'" })
  sortOrder: number;

  @Column("double", {
    name: "rotation",
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  rotation: number;

  @Column("varchar", { name: "font_name", nullable: true, length: 191 })
  fontName: string | null;

  @Column("varchar", { name: "text", nullable: true, length: 766 })
  text: string | null;

  @Column("float", {
    name: "line_spacing",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  lineSpacing: number | null;

  @Column("float", {
    name: "letter_spacing",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  letterSpacing: number | null;

  @Column("varchar", { name: "alignment", nullable: true, length: 191 })
  alignment: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 191 })
  color: string | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => Designs, (designs) => designs.textLayers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "design_id", referencedColumnName: "id" }])
  design: Designs;
}
