import { Column, Entity } from "typeorm";

@Entity("tmp_spain_order", { schema: "modema" })
export class TmpSpainOrder {
  @Column("int", { primary: true, name: "row" })
  row: number;

  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("varchar", { name: "design", nullable: true, length: 50 })
  design: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 50 })
  color: string | null;

  @Column("varchar", { name: "color_code", nullable: true, length: 20 })
  colorCode: string | null;

  @Column("int", { name: "cnt_25", nullable: true })
  cnt_25: number | null;

  @Column("int", { name: "cnt_06", nullable: true })
  cnt_06: number | null;

  @Column("int", { name: "cnt_28", nullable: true })
  cnt_28: number | null;

  @Column("int", { name: "cnt_60", nullable: true })
  cnt_60: number | null;

  @Column("int", { name: "cnt_80", nullable: true })
  cnt_80: number | null;

  @Column("int", { name: "cnt_02", nullable: true })
  cnt_02: number | null;

  @Column("int", { name: "cnt_03", nullable: true })
  cnt_03: number | null;

  @Column("int", { name: "cnt_75", nullable: true })
  cnt_75: number | null;
}
