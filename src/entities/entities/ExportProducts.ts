import { Column, Entity } from "typeorm";

@Entity("export_products", { schema: "mydatabase" })
export class ExportProducts {
  @Column("bigint", { name: "1", default: () => "'0'" })
  1: string;

  @Column("varchar", { name: "code", nullable: true, length: 191 })
  code: string | null;

  @Column("double", { name: "price", nullable: true, precision: 14, scale: 2 })
  price: number | null;
}
