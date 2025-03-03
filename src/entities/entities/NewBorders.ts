import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("new_borders", { schema: "mydatabase" })
export class NewBorders {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 191 })
  name: string | null;

  @Column("varchar", { name: "new_border", nullable: true, length: 20 })
  newBorder: string | null;

  @Column("varchar", { name: "old_border", nullable: true, length: 20 })
  oldBorder: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 20 })
  color: string | null;

  @Column("varchar", { name: "sizes", nullable: true, length: 20 })
  sizes: string | null;

  @Column("varchar", { name: "material", nullable: true, length: 20 })
  material: string | null;

  @Column("varchar", { name: "designer", nullable: true, length: 20 })
  designer: string | null;

  @Column("varchar", { name: "design", nullable: true, length: 20 })
  design: string | null;

  @Column("varchar", { name: "brand", nullable: true, length: 20 })
  brand: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 20 })
  type: string | null;
}
