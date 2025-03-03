import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subcolors } from "./Subcolors";

@Entity("colors", { schema: "mydatabase" })
export class Colors {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "colorName", nullable: true, length: 20 })
  colorName: string | null;

  @Column("varchar", { name: "colorCode", nullable: true, length: 20 })
  colorCode: string | null;

  @Column("varchar", { name: "hexCode", nullable: true, length: 20 })
  hexCode: string | null;

  @Column("varchar", { name: "colorCode_original", nullable: true, length: 20 })
  colorCodeOriginal: string | null;

  @OneToMany(() => Subcolors, (subcolors) => subcolors.color)
  subcolors: Subcolors[];
}
