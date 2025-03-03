import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceProductItems } from "./InvoiceProductItems";
import { Users } from "./Users";

@Index("print_profiles_created_by_index", ["createdBy"], {})
@Index("print_profiles_updated_by_index", ["updatedBy"], {})
@Index("print_profiles_version_change_date_unique", ["versionChangeDate"], {
  unique: true,
})
@Index("print_profiles_version_no_unique", ["versionNo"], { unique: true })
@Entity("print_profiles", { schema: "mydatabase" })
export class PrintProfiles {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "version_no", unique: true, length: 191 })
  versionNo: string;

  @Column("datetime", { name: "version_change_date", unique: true })
  versionChangeDate: Date;

  @Column("varchar", { name: "ink_code", nullable: true, length: 191 })
  inkCode: string | null;

  @Column("varchar", { name: "pass_count", nullable: true, length: 191 })
  passCount: string | null;

  @Column("varchar", { name: "heat_temperature", nullable: true, length: 191 })
  heatTemperature: string | null;

  @Column("varchar", { name: "heat_speed", nullable: true, length: 191 })
  heatSpeed: string | null;

  @Column("varchar", { name: "head_height", nullable: true, length: 191 })
  headHeight: string | null;

  @Column("varchar", {
    name: "fabrics_texture_grade",
    nullable: true,
    length: 191,
  })
  fabricsTextureGrade: string | null;

  @Column("varchar", {
    name: "fabrics_per_square_meter_weight",
    nullable: true,
    length: 191,
  })
  fabricsPerSquareMeterWeight: string | null;

  @Column("varchar", {
    name: "fabrics_background_color",
    nullable: true,
    length: 191,
  })
  fabricsBackgroundColor: string | null;

  @Column("varchar", {
    name: "laminate_glue_type",
    nullable: true,
    length: 191,
  })
  laminateGlueType: string | null;

  @Column("varchar", { name: "cyan_curve", nullable: true, length: 191 })
  cyanCurve: string | null;

  @Column("varchar", { name: "cyan_gain", nullable: true, length: 191 })
  cyanGain: string | null;

  @Column("varchar", { name: "magenta_curve", nullable: true, length: 191 })
  magentaCurve: string | null;

  @Column("varchar", { name: "magenta_gain", nullable: true, length: 191 })
  magentaGain: string | null;

  @Column("varchar", { name: "black_curve", nullable: true, length: 191 })
  blackCurve: string | null;

  @Column("varchar", { name: "black_gain", nullable: true, length: 191 })
  blackGain: string | null;

  @Column("varchar", { name: "yellow_curve", nullable: true, length: 191 })
  yellowCurve: string | null;

  @Column("varchar", { name: "yellow_gain", nullable: true, length: 191 })
  yellowGain: string | null;

  @Column("varchar", { name: "total_ink_limit", nullable: true, length: 191 })
  totalInkLimit: string | null;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'0'" })
  isActive: boolean;

  @Column("int", { name: "created_by", nullable: true, unsigned: true })
  createdBy: number | null;

  @Column("int", { name: "updated_by", nullable: true, unsigned: true })
  updatedBy: number | null;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.printProfile
  )
  invoiceProductItems: InvoiceProductItems[];

  @ManyToOne(() => Users, (users) => users.printProfiles, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "created_by", referencedColumnName: "id" }])
  createdBy2: Users;

  @ManyToOne(() => Users, (users) => users.printProfiles2, {
    onDelete: "SET NULL",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "updated_by", referencedColumnName: "id" }])
  updatedBy2: Users;
}
