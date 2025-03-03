import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Colors } from "./Colors";

@Index("color_id", ["colorId"], {})
@Entity("subcolors", { schema: "mydatabase" })
export class Subcolors {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("varchar", { name: "colorName", nullable: true, length: 20 })
  colorName: string | null;

  @Column("varchar", { name: "colorCode", nullable: true, length: 20 })
  colorCode: string | null;

  @Column("varchar", { name: "hexCode", nullable: true, length: 20 })
  hexCode: string | null;

  @Column("int", { name: "color_id", nullable: true, unsigned: true })
  colorId: number | null;

  @Column("int", { name: "order", nullable: true })
  order: number | null;

  @Column("varchar", { name: "colorCode_original", nullable: true, length: 20 })
  colorCodeOriginal: string | null;

  @ManyToOne(() => Colors, (colors) => colors.subcolors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "color_id", referencedColumnName: "id" }])
  color: Colors;
}
