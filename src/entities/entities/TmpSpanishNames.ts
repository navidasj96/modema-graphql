import { Column, Entity } from "typeorm";

@Entity("tmp_spanish_names", { schema: "modema" })
export class TmpSpanishNames {
  @Column("varchar", { name: "name", nullable: true, length: 192 })
  name: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 192 })
  title: string | null;

  @Column("varchar", { name: "name_es", nullable: true, length: 192 })
  nameEs: string | null;

  @Column("varchar", { name: "spanish_title", nullable: true, length: 192 })
  spanishTitle: string | null;

  @Column("int", { name: "product_id", nullable: true })
  productId: number | null;

  @Column("int", { name: "color_id", nullable: true })
  colorId: number | null;
}
