import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ExitControlItems } from "./ExitControlItems";
import { InvoiceProductItemInvoiceProductStatus } from "./InvoiceProductItemInvoiceProductStatus";
import { InvoiceProductStatuses } from "./InvoiceProductStatuses";
import { DamageReasons } from "./DamageReasons";
import { InvoiceProducts } from "./InvoiceProducts";
import { PrintProfiles } from "./PrintProfiles";
import { PrintRips } from "./PrintRips";
import { ProductionRolls } from "./ProductionRolls";

@Index("code", ["code"], { unique: true })
@Index("invoice_product_items_current_status_id_index", ["currentStatusId"], {})
@Index("invoice_product_items_damage_reason_id_index", ["damageReasonId"], {})
@Index(
  "invoice_product_items_invoice_product_id_index",
  ["invoiceProductId"],
  {}
)
@Index("invoice_product_items_print_profile_id_index", ["printProfileId"], {})
@Index("invoice_product_items_print_rip_id_index", ["printRipId"], {})
@Index(
  "invoice_product_items_production_roll_id_index",
  ["productionRollId"],
  {}
)
@Index("invoice_product_items_row_index", ["row"], {})
@Entity("invoice_product_items", { schema: "mydatabase" })
export class InvoiceProductItems {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "invoice_product_id", unsigned: true })
  invoiceProductId: number;

  @Column("int", { name: "current_status_id", unsigned: true })
  currentStatusId: number;

  @Column("int", { name: "row", unsigned: true })
  row: number;

  @Column("varchar", { name: "code", unique: true, length: 191 })
  code: string;

  @Column("varchar", { name: "pad_code", nullable: true, length: 191 })
  padCode: string | null;

  @Column("varchar", {
    name: "roll_reference_code",
    nullable: true,
    length: 191,
  })
  rollReferenceCode: string | null;

  @Column("int", { name: "production_roll_id", nullable: true, unsigned: true })
  productionRollId: number | null;

  @Column("date", {
    name: "predicted_date_for_received_by_repository",
    nullable: true,
  })
  predictedDateForReceivedByRepository: string | null;

  @Column("tinyint", {
    name: "is_tag_printed",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isTagPrinted: boolean | null;

  @Column("tinyint", {
    name: "is_printed_and_heated",
    nullable: true,
    width: 1,
  })
  isPrintedAndHeated: boolean | null;

  @Column("tinyint", { name: "from_depot", nullable: true, width: 1 })
  fromDepot: boolean | null;

  @Column("tinyint", { name: "is_reversed", width: 1, default: () => "'0'" })
  isReversed: boolean;

  @Column("int", { name: "print_profile_id", nullable: true, unsigned: true })
  printProfileId: number | null;

  @Column("tinyint", { name: "damage_type", nullable: true })
  damageType: number | null;

  @Column("varchar", { name: "damage_cause", nullable: true, length: 191 })
  damageCause: string | null;

  @Column("int", { name: "damage_reason_id", nullable: true, unsigned: true })
  damageReasonId: number | null;

  @Column("tinyint", {
    name: "is_inserted_into_sepidar",
    width: 1,
    default: () => "'0'",
  })
  isInsertedIntoSepidar: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column("int", { name: "temp_status_id", nullable: true })
  tempStatusId: number | null;

  @Column("int", { name: "print_rip_id", nullable: true, unsigned: true })
  printRipId: number | null;

  @Column("int", { name: "sort_order", nullable: true })
  sortOrder: number | null;

  @Column("smallint", { name: "tag_sort_order", nullable: true })
  tagSortOrder: number | null;

  @OneToMany(
    () => ExitControlItems,
    (exitControlItems) => exitControlItems.invoiceProductItem
  )
  exitControlItems: ExitControlItems[];

  @OneToMany(
    () => InvoiceProductItemInvoiceProductStatus,
    (invoiceProductItemInvoiceProductStatus) =>
      invoiceProductItemInvoiceProductStatus.invoiceProductItem
  )
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @ManyToOne(
    () => InvoiceProductStatuses,
    (invoiceProductStatuses) => invoiceProductStatuses.invoiceProductItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "current_status_id", referencedColumnName: "id" }])
  currentStatus: InvoiceProductStatuses;

  @ManyToOne(
    () => DamageReasons,
    (damageReasons) => damageReasons.invoiceProductItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "damage_reason_id", referencedColumnName: "id" }])
  damageReason: DamageReasons;

  @ManyToOne(
    () => InvoiceProducts,
    (invoiceProducts) => invoiceProducts.invoiceProductItems,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "invoice_product_id", referencedColumnName: "id" }])
  invoiceProduct: InvoiceProducts;

  @ManyToOne(
    () => PrintProfiles,
    (printProfiles) => printProfiles.invoiceProductItems,
    { onDelete: "SET NULL", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "print_profile_id", referencedColumnName: "id" }])
  printProfile: PrintProfiles;

  @ManyToOne(() => PrintRips, (printRips) => printRips.invoiceProductItems, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "print_rip_id", referencedColumnName: "id" }])
  printRip: PrintRips;

  @ManyToOne(
    () => ProductionRolls,
    (productionRolls) => productionRolls.invoiceProductItems,
    { onDelete: "NO ACTION", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "production_roll_id", referencedColumnName: "id" }])
  productionRoll: ProductionRolls;
}
