import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";
import { VisitorGroupRates } from "./VisitorGroupRates";
import { VisitorSales } from "./VisitorSales";
import { Visitors } from "./Visitors";

@Index("visitor_groups_name_unique", ["name"], { unique: true })
@Entity("visitor_groups", { schema: "mydatabase" })
export class VisitorGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 191 })
  name: string;

  @Column("double", {
    name: "coupon_discount_rate",
    precision: 22,
    default: () => "'0'",
  })
  couponDiscountRate: number;

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

  @OneToMany(() => Invoices, (invoices) => invoices.visitorGroup)
  invoices: Invoices[];

  @OneToMany(
    () => VisitorGroupRates,
    (visitorGroupRates) => visitorGroupRates.visitorGroup
  )
  visitorGroupRates: VisitorGroupRates[];

  @OneToMany(() => VisitorSales, (visitorSales) => visitorSales.visitorGroup)
  visitorSales: VisitorSales[];

  @OneToMany(() => Visitors, (visitors) => visitors.visitorGroup)
  visitors: Visitors[];
}
