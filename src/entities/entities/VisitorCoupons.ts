import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { Visitors } from "./Visitors";

@Index("visitor_coupons_code_unique", ["code"], { unique: true })
@Index("visitor_coupons_visitor_id_index", ["visitorId"], {})
@Entity("visitor_coupons", { schema: "modema" })
export class VisitorCoupons {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "visitor_id", unsigned: true })
  visitorId: number;

  @Column("varchar", { name: "name", length: 191 })
  name: string;

  @Column("varchar", { name: "code", unique: true, length: 191 })
  code: string;

  @Column("tinyint", { name: "is_active", width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp", {
    name: "updated_at",
    default: () => "'0000-00-00 00:00:00'",
  })
  updatedAt: Date;

  @OneToMany(() => Invoices, (invoices) => invoices.visitorCoupon)
  invoices: Invoices[];

  @ManyToOne(() => Visitors, (visitors) => visitors.visitorCoupons, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "visitor_id", referencedColumnName: "id" }])
  visitor: Visitors;
}
