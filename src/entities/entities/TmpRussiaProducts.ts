import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tmp_russia_products", { schema: "mydatabase" })
export class TmpRussiaProducts {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "product_code", nullable: true, length: 20 })
  productCode: string | null;

  @Column("varchar", { name: "color_code", nullable: true, length: 20 })
  colorCode: string | null;

  @Column("varchar", { name: "size_code", nullable: true, length: 20 })
  sizeCode: string | null;

  @Column("varchar", { name: "border_code", nullable: true, length: 20 })
  borderCode: string | null;

  @Column("varchar", { name: "code", nullable: true, length: 50 })
  code: string | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;
}
