import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tmp_tag_changes_print", { schema: "modema" })
export class TmpTagChangesPrint {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "size", nullable: true, length: 50 })
  size: string | null;

  @Column("varchar", { name: "code", nullable: true, length: 50 })
  code: string | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("varchar", { name: "old_code", nullable: true, length: 50 })
  oldCode: string | null;
}
