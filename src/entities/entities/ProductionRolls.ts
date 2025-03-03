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

@Index("production_rolls_bill_number_index", ["billNumber"], {})
@Index("production_rolls_closed_by_index", ["closedBy"], {})
@Index("production_rolls_created_by_index", ["createdBy"], {})
@Index("production_rolls_roll_number_unique", ["rollNumber"], { unique: true })
@Entity("production_rolls", { schema: "mydatabase" })
export class ProductionRolls {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "roll_number", unique: true, length: 191 })
  rollNumber: string;

  @Column("double", { name: "width", precision: 22, default: () => "'0'" })
  width: number;

  @Column("double", { name: "length", precision: 22, default: () => "'0'" })
  length: number;

  @Column("double", { name: "weight", precision: 22, default: () => "'0'" })
  weight: number;

  @Column("varchar", { name: "bill_number", nullable: true, length: 191 })
  billNumber: string | null;

  @Column("datetime", { name: "close_date", nullable: true })
  closeDate: Date | null;

  @Column("tinyint", { name: "is_shaggy", width: 1, default: () => "'0'" })
  isShaggy: boolean;

  @Column("varchar", { name: "shaggy_color", nullable: true, length: 191 })
  shaggyColor: string | null;

  @Column("tinyint", { name: "is_closed", width: 1, default: () => "'0'" })
  isClosed: boolean;

  @Column("timestamp", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "created_by", nullable: true, unsigned: true })
  createdBy: number | null;

  @Column("int", { name: "closed_by", nullable: true, unsigned: true })
  closedBy: number | null;

  @OneToMany(
    () => InvoiceProductItems,
    (invoiceProductItems) => invoiceProductItems.productionRoll
  )
  invoiceProductItems: InvoiceProductItems[];

  @ManyToOne(() => Users, (users) => users.productionRolls, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "closed_by", referencedColumnName: "id" }])
  closedBy2: Users;

  @ManyToOne(() => Users, (users) => users.productionRolls2, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "created_by", referencedColumnName: "id" }])
  createdBy2: Users;
}
