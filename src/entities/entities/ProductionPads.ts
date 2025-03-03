import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductionPadProductionPadStatus } from "./ProductionPadProductionPadStatus";
import { BasicCarpetSizes } from "./BasicCarpetSizes";
import { ProductionPadStatuses } from "./ProductionPadStatuses";

@Index("production_pads_basic_carpet_size_id_index", ["basicCarpetSizeId"], {})
@Index(
  "production_pads_production_pad_status_id_index",
  ["productionPadStatusId"],
  {}
)
@Entity("production_pads", { schema: "mydatabase" })
export class ProductionPads {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "basic_carpet_size_id", unsigned: true })
  basicCarpetSizeId: number;

  @Column("int", { name: "production_pad_status_id", unsigned: true })
  productionPadStatusId: number;

  @Column("varchar", { name: "code", length: 191 })
  code: string;

  @Column("tinyint", { name: "is_used", width: 1, default: () => "'0'" })
  isUsed: boolean;

  @Column("tinyint", { name: "is_tag_printed", width: 1, default: () => "'0'" })
  isTagPrinted: boolean;

  @Column("varchar", { name: "roll_ref_code", nullable: true, length: 191 })
  rollRefCode: string | null;

  @Column("int", { name: "row_no", unsigned: true })
  rowNo: number;

  @Column("datetime", { name: "request_date", nullable: true })
  requestDate: Date | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => ProductionPadProductionPadStatus,
    (productionPadProductionPadStatus) =>
      productionPadProductionPadStatus.productionPad
  )
  productionPadProductionPadStatuses: ProductionPadProductionPadStatus[];

  @ManyToOne(
    () => BasicCarpetSizes,
    (basicCarpetSizes) => basicCarpetSizes.productionPads,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "basic_carpet_size_id", referencedColumnName: "id" }])
  basicCarpetSize: BasicCarpetSizes;

  @ManyToOne(
    () => ProductionPadStatuses,
    (productionPadStatuses) => productionPadStatuses.productionPads,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    { name: "production_pad_status_id", referencedColumnName: "id" },
  ])
  productionPadStatus: ProductionPadStatuses;
}
